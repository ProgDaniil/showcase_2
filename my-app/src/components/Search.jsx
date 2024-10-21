import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField 
    type='search'
    value={value} 
    onChange={onChange} 
    sx ={{mb:"1.5rem"}}

    label="Поиск"
    variant="standard"
    fullWidth
    />;
};

export default Search;