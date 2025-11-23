import { readFile } from "fs/promises";
import db from "../data/db.js";
import { collection, addDoc } from "firebase/firestore";

const runSeed = async () => {
  console.log("🚀 Iniciando seed de productos...");

  try {
    // Lee el JSON directamente desde el archivo
    const fileUrl = new URL("../data/products.json", import.meta.url);
    const fileContent = await readFile(fileUrl, "utf-8");
    const products = JSON.parse(fileContent);

    console.log("📦 Productos obtenidos:", products?.length);

    if (!products || products.length === 0) {
      console.log("⚠️ No hay productos para subir. Revisá products.json.");
      process.exit(0);
    }

    const productsRef = collection(db, "products");

    for (const { id, ...dataProduct } of products) {
      const docRef = await addDoc(productsRef, dataProduct);
      console.log(
        `✅ Subido producto "${dataProduct.name || id}" -> docId: ${docRef.id}`
      );
    }

    console.log("🎉 Seed finalizado correctamente.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error durante el seed:", error);
    process.exit(1);
  }
};

runSeed();
