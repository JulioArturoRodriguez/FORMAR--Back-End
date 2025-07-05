import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const connectDB = async () => {
  const db = await open({
    filename: './base-de-dados.db',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS productos (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      precio REAL NOT NULL,
      descripcion TEXT,
      stock INTEGER NOT NULL DEFAULT 0,
      ventas INTEGER NOT NULL DEFAULT 0,
      fecha_de_ingreso TEXT DEFAULT (datetime('now')),
      fecha_de_salida TEXT DEFAULT (datetime('now')),
      vendedor TEXT NOT NULL,
      categoria TEXT NOT NULL CHECK (
        categoria IN ('frutas', 'verduras', 'lácteos', 'carnes', 'panadería', 'bebidas', 'otros')
      )
    )
  `);

  return db;
};
