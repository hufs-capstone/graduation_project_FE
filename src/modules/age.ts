
const SETAGE = 'age/SETAGE' as const;

export const setage = (age:number) => ({type:SETAGE, payload: age});

type AgeAction = ReturnType<typeof setage>;

type AgeState = {
    age: number;
}

const initialState: AgeState = {
    age: 0
};

function age(state: AgeState = initialState, action: AgeAction){
    switch(action.type) {
        case SETAGE:
            return{age: action.payload}
        default:
            return state
    }
}
export default age;