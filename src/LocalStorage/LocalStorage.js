import { toast } from "react-toastify";
const getItemFromLS =()=>{
    const storedItem = localStorage.getItem('Appid');
    if(storedItem){
        const storedItemData = JSON.parse(storedItem);
        return storedItemData;
    }
    else{
        return [];
    }

}

const addDataToLS =(id)=>{
    const storedData = getItemFromLS();
    if(storedData.includes(id)){
        toast('Already Exist');
    }
    else{
        storedData.push(id);
        const dataStringify = JSON.stringify(storedData);
        // console.log(dataStringify);
        localStorage.setItem("Appid",dataStringify);
    }


}
const removeDataFromLS =(id)=>{
    const storedData = getItemFromLS();

    const remainingData = storedData.filter((data)=>data!==parseInt(id));
    const dataStringify = JSON.stringify(remainingData);
    localStorage.setItem("Appid",dataStringify);

}

export {getItemFromLS,addDataToLS,removeDataFromLS}