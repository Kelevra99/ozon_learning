// не умеет эта версия json-server генерировать id, поэтому мы используем модуль getNextId
// и делаем функцию асинхронной. Даже если гугл умеет, все равно буду задавать явно id.
//Так надежнее, потому что гугл может перестать генерировать id.
import getNextId from "./getNextId";
const postData = async () => {
  const nextId = await getNextId(); // получаем следующий id
  
  return await fetch("https://test-ca562-default-rtdb.firebaseio.com/goods.json", {
    method: "POST",
    body: JSON.stringify({
      id: nextId, // проставляем id
      title: "Ведьмак 3: Дикая Охота",
      price: 3000,
      sale: true,
      img: "https://upload.wikimedia.org/wikipedia/ru/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg",
      category: "Игры и софт",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

export default postData;
