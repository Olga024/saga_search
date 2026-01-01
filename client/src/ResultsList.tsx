import { useSelector } from 'react-redux';
import type { TSkill, TState } from './reducer';

export const ResultsList = () => {
    const state: TState = useSelector((state: TState) => state);
    const skills: TSkill[] = state.skills;

    return (
        <ul>
            {skills.map(skill => (
                <li key={skill.id}>{skill.name}</li>
            ))}
        </ul>
    );
}