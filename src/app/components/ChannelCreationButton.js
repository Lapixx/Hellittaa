import style from '../styles/channelCreationButton.scss';

const ChannelCreationButton = ({ onCreate, label }) => {

    const createChannel = () => {

        const input = window.prompt('Enter channel name');
        if (!input)
            return;

        const name = input.trim();
        if (name.length > 0)
            onCreate(name);
    };

    return (
        <button onClick={createChannel} className={style.button}>
            {label}
        </button>
    );
};

export default ChannelCreationButton;