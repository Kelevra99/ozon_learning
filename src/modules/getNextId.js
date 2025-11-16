const getNextId = async () => {
  const res = await fetch('https://test-ca562-default-rtdb.firebaseio.com/goods.json');
  const data = await res.json();
  const total = data.length;       
  const lastId = data[total - 1].id; // Берём последний id из массива
  console.log('Последняя запись:', lastId);
  return String(Number(lastId) + 1);
};

export default getNextId;
