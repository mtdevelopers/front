import { useRef, useState } from 'react';
import Select from 'react-select'



const MyComponent = (props) => {
    const selectRef = useRef();
    const [isClearable,setIsClearable] = useState(true);
    const [isLoading,setIsLoading] = useState(false);
    
    const toggleClearable = () => {
        setIsClearable(!isClearable);
    }
    const toggleLoading = () => {
        setIsLoading(!isLoading)
    }
      
    const changeHandler = () => {
        console.log(selectRef.current.name)
    }
      
    const options = props.options.map(el => {
        return {value:el._id,label:el.name}
    });
    
    return(
            <Select 
            isLoading={isLoading}
            isClearable={isClearable}
            placeholder="لیست استان ها" 
            ref={selectRef}
            options={options} />
        )
}

export default MyComponent;