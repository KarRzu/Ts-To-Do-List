export function validateTextInput(value: string){
    const trimValue: string = value.trim()

    if(trimValue.length >= 3){
        return true;
    } else{
        return false;
    }
}