import SQLite from "react-native-sqlite-storage";

const names = {
  nomeDB: "epbl.db",
  versaoDB: "1.0",
  descricaoDB: "",
  tamanhoDB: 200000
};

SQLite.enablePromise(true);

const db = SQLite.openDatabase(
  names.nomeDB,
  names.versaoDB,
  names.descricaoDB,
  //@ts-ignore
  names.tamanhoDB
);

export default db;
