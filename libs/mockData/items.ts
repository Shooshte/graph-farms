import { Item, ItemGroup } from '../types/index';

export const MOCK_ITEM_GROUPS: ItemGroup[] = [
  {
    name: 'drinks',
    itemIds: ['1', '2', '4', '5', '7', '14', '43', '44'],
  },
  {
    name: 'meat',
    itemIds: ['19', '22', '33', '39', '44', '45'],
  },
  {
    name: 'vegetables',
    itemIds: [
      '3',
      '6',
      '18',
      '27',
      '36',
      '38',
      '39',
      '40',
      '41',
      '42',
      '46',
      '47',
      '48',
      '49',
      '50',
    ],
  },
];

export const MOCK_ITEMS: Item[] = [
  {
    id: '1',
    name: 'Coca Cola 1,5 L',
    defaultPrice: 1.29,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '2',
    name: 'Fanta 1,5 L',
    defaultPrice: 1.19,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=803&q=80',
  },
  {
    id: '4',
    name: 'Orange Juice 1 L',
    defaultPrice: 0.8,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
  {
    id: '5',
    name: 'Apple Juice 1 L',
    defaultPrice: 1.0,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '7',
    name: 'Schweppes 1 L',
    defaultPrice: 0.9,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1598614187854-26a60e982dc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '3',
    name: 'Salad 1 kg',
    defaultPrice: 1.18,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
  },
  {
    id: '6',
    name: 'Potatoes 2,5 kg',
    defaultPrice: 2.79,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '14',
    name: 'Beer 0,5 L',
    defaultPrice: 6.29,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '18',
    name: 'Tomatoes 1 kg',
    defaultPrice: 2.99,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1635848831260-97b70d5bed58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '44',
    name: 'Roastbeef Steak 250 g',
    defaultPrice: 8.99,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1547637205-fde0c9011f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '22',
    name: 'Pork sausage 500 g',
    defaultPrice: 3.99,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1551135020-39e4ca508d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '19',
    name: 'Chicken wings 500 g',
    defaultPrice: 4.99,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1592011432621-f7f576f44484?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '27',
    name: 'Red pepper 1 kg',
    defaultPrice: 1.21,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1465362342881-f183990e82b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '33',
    name: 'Chicken Breast 500 g',
    defaultPrice: 8.99,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1633096013004-e2cb4023b560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
  {
    id: '36',
    name: 'Cucumber 1 kg',
    defaultPrice: 1.55,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1589621316382-008455b857cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '38',
    name: 'Carrots 1 kg',
    defaultPrice: 0.13,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1633380110125-f6e685676160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: '39',
    name: 'Pumpkin 1 kg',
    defaultPrice: 10.99,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1604905178345-80473d563f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
  {
    id: '40',
    name: ' White Onions 1 kg',
    defaultPrice: 1.09,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b25pb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '41',
    name: 'Red Onions 1 kg',
    defaultPrice: 1.35,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1605197378298-02bf0af1c896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '42',
    name: 'Eggplants 1 kg',
    defaultPrice: 3.09,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1604321272882-07c73743be32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '43',
    name: 'Red Wine 1 L',
    defaultPrice: 5.8,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1597043851759-3b383a6d1c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '44',
    name: 'White Wine 1 L',
    defaultPrice: 7.9,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '45',
    name: 'Pork Steak 500 g',
    defaultPrice: 1.09,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1560883389-3bd36d16d021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  },
  {
    id: '46',
    name: ' Spring Onions 1 kg',
    defaultPrice: 3.48,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1602769515559-e15133a7e992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80',
  },
  {
    id: '47',
    name: 'Cherry tomatoes 1 kg',
    defaultPrice: 4.1,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1587411768515-eeac0647deed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: '48',
    name: 'Beetroot 1 kg',
    defaultPrice: 2.19,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '49',
    name: 'Beans 1 kg',
    defaultPrice: 0.89,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1513868853742-e7fb786265db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
  },
  {
    id: '50',
    name: 'Peas 1 kg',
    defaultPrice: 1.79,
    availableQuantity: 100,
    imageURL:
      'https://images.unsplash.com/photo-1632640109749-b97e1e0e6c96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];
