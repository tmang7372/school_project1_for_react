import Age from '../Practical 4/Age';
import Hello from '../Practical 2/Hello';
import HobbyList from '../Practical 10/HobbyList';
import {TitleLi} from '../Practical 4/TitleLi';

export default function AboutMe(props) {
    return (
        <div>
            <Hello />
            <ol>
                <TitleLi title="name" text="Jeremiah Ang" />
                <Age value={17} />
                <li>
                    <b>Hobbies:</b>
                    <ol>
                        <HobbyList
                            hobbies={[{ title: 'Swim', emoji: '🏊' }, { title: 'Run' }, { title: 'Game', emoji: '🎮' }]}
                        />
                    </ol>
                </li>
            </ol>
        </div>
    );
}
