
const DisplayList = ({myList,title}) => {

console.log(title)
  return (
   
      <ul >{myList.map((item)=>{
        return (<li key={item.id}>
           Name: {item.name}, Age: {item.age} 
        </li>)
      })
    }
    </ul>   
          
  );
};

export default DisplayList;
