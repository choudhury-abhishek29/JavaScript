const env = process.env;
export default {
  mongodbUri: 'mongodb://52.8.171.238:27017/db_1',
  port: env.PORT || 8089,
  host: env.HOST || 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};