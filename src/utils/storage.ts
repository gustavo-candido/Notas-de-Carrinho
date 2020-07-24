import AsyncStorage from '@react-native-community/async-storage';

export interface Product {
  id: string;
  name: string;
  catch: boolean;
  price: number;
  quantity: number;
  unit: string;
}

interface List {
  name: string;
  isShopping: boolean;
  products: Product[];
}

export async function saveList(key: string, value: List): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw new Error('Error when save list');
  }
}

export async function loadList(key: string): Promise<List> {
  try {
    const fetchData = await AsyncStorage.getItem(key);

    if (!fetchData) {
      throw new Error('Chave invalida');
    }

    const listFormatted = JSON.parse(fetchData);

    return listFormatted;
  } catch (e) {
    throw new Error('Error when retrieve data');
  }
}
