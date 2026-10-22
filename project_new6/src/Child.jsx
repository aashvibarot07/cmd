import Grandchild from './Grandchild';

function Child({ username }) {
    return (
        <div>
            <p>I am Child. I don't need "username", I just forward it.</p>
            <Grandchild username={username} />
        </div>
    );
}

export default Child;