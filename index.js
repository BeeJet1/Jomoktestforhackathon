import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Эндпоинт генерации сказки-видео
app.post("/generate-story", (req, res) => {
  const { name, age, gender, genre } = req.body;

  console.log("📩 Получены данные:", { name, age, gender, genre });

  // Пока возвращаем тестовое видео (W3Schools demo)
  res.json({
    status: "ok",
    message: `Сказка для ${name}, ${age} лет, ${gender}, жанр: ${genre}`,
    video_url: "https://www.w3schools.com/html/mov_bbb.mp4"
  });
});

app.listen(PORT, () => {
  console.log(`✅ API запущен на http://localhost:${PORT}`);
});
