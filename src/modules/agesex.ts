
const SETAGE = 'agesex/SETAGE' as const;
const SETSEX = 'agesex/SETSEX' as const;

export const setage = (age:number) => ({type:SETAGE, payload: age});
export const setsex = (sex:string) => ({type:SETSEX, payload: sex});

type AgeSexAction = ReturnType<typeof setage>|
ReturnType<typeof setsex>;

type AgeSexState = {
    age: number
    sex: string
}

const initialState: AgeSexState = {
    age: 0,
    sex: 'female'
};

function agesex(state: AgeSexState = initialState, action: AgeSexAction){
    switch(action.type) {
        case SETAGE:
            return{age: action.payload, sex: state.sex}
        case SETSEX:
            return {age: state.age, sex: action.payload}
        default:
            return state
    }
}
export default agesex;