import * as React from 'react';
import classNames from 'classnames';
import { Layout } from './App';

type TopbarProps = {
    inEmbeddedMode: boolean;
    currentLayout: Layout;
    isProgramRunning: boolean;
    onSettingsBtnClick: () => void;
    onRunBtnClick: () => void;
    onEditBtnClick: () => void;
    onSplitBtnClick: () => void;
    onOpenInCplayground: () => void;
};

/**
 * Calls handler() if the pressed key is "enter" or "space."
 */
function filterKeypress(e: React.KeyboardEvent<HTMLDivElement>, handler: () => void): void {
    if (e.keyCode === 32 /* space */ || e.keyCode === 13 /* enter */) {
        handler();
    }
}

class Topbar extends React.PureComponent<TopbarProps> {
    render(): React.ReactNode {
        const embeddedModeButtons = (
            <>
                {this.props.currentLayout !== Layout.EDIT && (
                    <div
                        role="button"
                        className="btn has-shortcut"
                        id="edit-btn"
                        onClick={this.props.onEditBtnClick}
                        onKeyDown={(e): void => filterKeypress(e, this.props.onEditBtnClick)}
                        tabIndex={0}
                    >
                        <div className="main-text">
                            <i className="fas fa-pencil-alt icon" />
                            &nbsp;Edit
                        </div>
                        <div className="shortcut">cmd+e</div>
                    </div>
                )}
                <div
                    role="button"
                    className="btn"
                    id="split-pane-btn"
                    onClick={this.props.onSplitBtnClick}
                    onKeyDown={(e): void => filterKeypress(e, this.props.onSplitBtnClick)}
                    tabIndex={0}
                >
                    <div className="main-text">
                        <i className="fas fa-columns icon" />
                        &nbsp;Split
                    </div>
                </div>
                <div
                    role="button"
                    className="btn"
                    id="open-in-cplayground-btn"
                    onClick={this.props.onOpenInCplayground}
                    onKeyDown={(e): void => filterKeypress(e, this.props.onOpenInCplayground)}
                    tabIndex={0}
                >
                    <div className="main-text">
                        <i className="fas fa-external-link-alt icon" />
                        &nbsp;Open in CPlayground
                    </div>
                </div>
            </>
        );
        return (
            <div className="topbar">
                <div
                    role="button"
                    className="btn has-shortcut"
                    id="settings-btn"
                    onClick={this.props.onSettingsBtnClick}
                    onKeyDown={(e): void => filterKeypress(e, this.props.onSettingsBtnClick)}
                    tabIndex={0}
                >
                    <div className="main-text"><i className="fas fa-cog" /></div>
                    <div className="shortcut">cmd+,</div>
                </div>
                <div
                    role="button"
                    className={classNames('btn', 'has-shortcut', { disabled: this.props.isProgramRunning })}
                    id="run-btn"
                    onClick={this.props.onRunBtnClick}
                    onKeyDown={(e): void => filterKeypress(e, this.props.onRunBtnClick)}
                    tabIndex={0}
                >
                    <div className="main-text">
                        <div className="icon play-icon">
                            <span className="outline">&#9655;</span>
                            <span className="filled">&#9654;</span>
                        </div>
                        Run
                    </div>
                    <div className="shortcut">shift+enter</div>
                </div>
                {this.props.inEmbeddedMode ? embeddedModeButtons : null}
            </div>
        );
    }
}

export default Topbar;
