import { useEmojiContext } from "./context/EmojiContext";

export const Emoji = () => {
    const { currentEmoji, handleUpdateEmoji } = useEmojiContext();

    const changeMood = () => {
        currentEmoji !== "🫨" ? handleUpdateEmoji("🫨") : handleUpdateEmoji("🧐");
    };

    return (
        <>
            <div className="MoodChanger componentBox">
                Current Mood: {currentEmoji}
            </div>
            <button onClick={() => changeMood()}>Change Mood</button>
        </>
    );
};

export default Emoji;
