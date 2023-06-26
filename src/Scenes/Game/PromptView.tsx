import { Dispatch, useContext } from "react";
import Button from "../../Components/Button";
import getLabel from "../../Locale/GetLabel";
import GameStringComponent from "./GameStringComponent";
import { GamePrompt } from "./Model/TargetSelector";
import { SelectorUpdate } from "./Model/TargetSelectorReducer";
import "./Style/PromptView.css";
import { GameTableContext } from "./GameScene";
import { createPortal } from "react-dom";

export interface PromptProps {
    prompt: GamePrompt;
    selectorDispatch: Dispatch<SelectorUpdate>;
}

export default function PromptView({ prompt, selectorDispatch }: PromptProps) {
    const table = useContext(GameTableContext);
    
    if (prompt.type == 'yesno') {
        const handleYes = () => selectorDispatch({ setPrompt: { ...prompt, response: true }});
        const handleNo = () => selectorDispatch({ undoSelection: { table } });

        return createPortal(
            <div className="prompt-view">
                <div className="prompt-message">
                    <p><GameStringComponent message={prompt.message} /></p>
                </div>
                <div className="prompt-buttons">
                    <Button color='blue' onClick={handleYes}>{getLabel('ui', 'BUTTON_YES')}</Button>
                    <Button color='red' onClick={handleNo}>{getLabel('ui', 'BUTTON_NO')}</Button>
                </div>
            </div>,
            document.body
        );
    } else if (prompt.type == 'playpick') {
        const card = prompt.card;

        const message = {
            format_str: 'PROMPT_PLAY_OR_PICK',
            format_args:[
                { card: {
                    name: card.cardData.name,
                    sign: card.cardData.sign
                }}
            ]
        };

        const handlePlay = () => selectorDispatch({ selectPlayingCard: { card, table } });
        const handlePick = () => selectorDispatch({ selectPickCard: card });
        const handleUndo = () => selectorDispatch({ undoSelection: { table } });

        return createPortal(
            <div className="prompt-view">
                <div className="prompt-message">
                    <p><GameStringComponent message={message} /></p>
                </div>
                <div className="prompt-buttons">
                    <Button color='blue' onClick={handlePlay}>{getLabel('ui', 'BUTTON_PLAY')}</Button>
                    <Button color='blue' onClick={handlePick}>{getLabel('ui', 'BUTTON_PICK')}</Button>
                    <Button color='red' onClick={handleUndo}>{getLabel('ui', 'BUTTON_UNDO')}</Button>
                </div>
            </div>,
            document.body
        );
    } else {
        return null;
    }
}
