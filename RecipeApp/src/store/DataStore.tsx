import { create } from "zustand";
import { RecipeDetails } from "../pages/Info";

interface DataStore {
  loading: boolean;
  setLoading: (status: boolean)=>void;
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
  results:any;
  setResults:(results:any)=>void;
  TopPicks:any,
  setTopPicks:(results:any)=>void
  joke:string;
  setJoke:(joke:string)=>void;
  username:string;
  setUsername:(name:string)=>void;
  search:string,
  setSearch:(search:string)=>void;
  currentSwitchOn:string;
  togglecurrentSwitchOn:(currentItem:string)=>void;
  details:RecipeDetails|null;
  setDetails:(details:RecipeDetails)=>void;
  similar:any;
  setSimilar:(similar:any)=>void
}

export const useDataStore = create<DataStore>((set) => ({
  loading: false,
  setLoading: (status) => set({ loading: status }),
  openIndex: null,
  toggleFAQ: (index) =>set((state) => ({openIndex: state.openIndex === index ? null : index})),
  results:[],
  setResults:(results:any)=>set({results:results}),
  TopPicks:[],
  setTopPicks:(results:any)=>set({TopPicks:results}),
  joke:"",
  setJoke:(joke:string)=>set({joke:joke}),
  username:"",
  setUsername:(name:string)=>set({username:name}),
  search:"",
  setSearch:(search:string)=>set({search:search}),
  currentSwitchOn:"ingredients",
  togglecurrentSwitchOn:(currentItem:string)=>set((state) => ({currentSwitchOn: state.currentSwitchOn === currentItem ? state.currentSwitchOn : currentItem})),
  details:null,
  setDetails:(details:RecipeDetails)=>set({details:details}),
  similar:null,
  setSimilar:(similar:any)=>set({similar:similar})
}));
