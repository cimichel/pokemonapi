//Default session can be used to recognize the user and display their name
import {DefaultSession} from 'next-auth';

export function UserCard({user}: {user: DefaultSession["user"]}){
    return(
        <div>
            <h3>welcome {user?.name}</h3>
        </div>
    )
}