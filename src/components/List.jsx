export default function List(props) {
  const itemList = props.items;
  const category = props.category;

  //   const fruits = [
  //     { id: 1, name: 'apple', cal: 95 },
  //     { id: 2, name: 'orange', cal: 45 },
  //     { id: 3, name: 'banana', cal: 105 },
  //     { id: 4, name: 'coconut', cal: 159 },
  //     { id: 5, name: 'pineapple', cal: 37 },
  //   ];
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));
  //   fruits.sort((a, b) => b.name.localeCompare(a.name));
  //   fruits.sort((a, b) => a.cal - b.cal);

  //   const lowCalFruits = fruits.filter((fruit) => fruit.cal < 100);
  //   const hiCalFruits = fruits.filter((fruit) => fruit.cal >= 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      <b>{item.name}</b>: &nbsp;{item.cal}
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
}
