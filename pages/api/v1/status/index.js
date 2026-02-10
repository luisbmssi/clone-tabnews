import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const versionQuery = await database.query("SHOW server_version;");
  const version = versionQuery.rows[0].server_version;

  const maxConnectionsQuery = await database.query("SHOW max_connections;");
  const maxConnections = maxConnectionsQuery.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;

  const openedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1",
    values: [databaseName],
  });
  const openedConnections = openedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        max_connections: parseInt(maxConnections),
        opened_connections: openedConnections,
        version: version,
      },
    },
  });
}

export default status;
