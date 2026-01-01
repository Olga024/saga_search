import { createReducer } from '@reduxjs/toolkit';
import { searchSkills, receiveSkills, searchFailed } from './actions';

export type TSkill = {
    id: number;
    name: string;
}

export type TState = {
    loading: boolean;
    hasSearched: boolean;
    skills: TSkill[];
    error?: string;
};

const initialState: TState = {
    loading: false,
    hasSearched: false,
    skills: [],
};

const skillsReducer = createReducer(initialState, builder => {
    builder
        .addCase(searchSkills, state => {
            if (state.hasSearched) {
                return { ...state, loading: true };
            } else {
                return { ...state, loading: true, skills: [] };
            }
        })
        .addCase(receiveSkills, (state, action) => ({
            ...state,
            loading: false,
            hasSearched: true,
            skills: action.payload,
        }))
        .addCase(searchFailed, (state, action) => ({
            ...state,
            loading: false,
            hasSearched: true,
            error: action.payload.message,
        }));
});

export default skillsReducer;