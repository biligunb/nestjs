module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'password',
  database: 'test_db',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: { migrationsDir: 'src/migrations' },
};
