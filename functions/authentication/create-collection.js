import faunadb from 'faunadb';

const USER_COLLECTION = 'users';

const createUsersCollection = async function () {
  if (!process.env.FAUNADB_SERVER_SECRET) {
    console.log('No FAUNADB_SERVER_SECRET in environment, skipping DB setup')
  }
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  try {
    await client.query(query.CreateCollection({ name: USER_COLLECTION }));
    console.log('Created users collection.');

    await client.query(
      query.CreateIndex({
        name: 'all_users',
        source: query.Collection(USER_COLLECTION),
        active: true,
      })
    );
    console.log('all_users index created.');

    await client.query(
      query.CreateIndex({
        name: 'users_by_email',
        source: query.Collection(USER_COLLECTION),
        terms: [{ field: ['data', 'email'] }],
        values: [{ field: ['data', 'email'] }],
        unique: true,
        active: true
      })
    );
    console.log('users_by_email index created.');

    await client.query(
      query.CreateIndex({
        name: 'users_by_username',
        source: query.Collection(USER_COLLECTION),
        terms: [{ field: ['data', 'username'] }],
        values: [{ field: ['data', 'username'] }],
        unique: true,
        active: true
      })
    );

    console.log('users_by_username index created.');
    return;
  } catch (error) {
    if (error.requestResult.statusCode === 400 && error.message === 'instance not unique') {
      console.log('Collection already exists.');
      return;
    }
  }
}

createUsersCollection();