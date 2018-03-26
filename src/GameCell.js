import React from 'react';
import PropTypes from 'prop-types';

class GameCell extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const cell = this.props.cell;
        const cellSum = cell.x + cell.y;
        const image = cell.chessMan.image;
        const backgroundColor = (cell.status === "onWay") ? "#FF8C00" : (
            (cellSum % 2 === 1) ? "#A0522D" : "#F5DEB3"
        );
        return (
            <div>
                <div className="cell"
                     style={{
                         backgroundColor: backgroundColor
                     }}>
                    <div className="container-for-images">
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                background:
                                "url(" +
                                image +
                                ") center center / cover",
                                position:
                                    "absolute",
                                left: "0",
                                borderRadius: "5px",
                            }}
                            data-original-title=""
                        />
                        <div className="overlay-for-images"/>
                    </div>
                    {/*{`${cell.x} ${cell.y}`}*/}
                </div>
            </div>
        );
    }
}

GameCell.propTypes = {
    cell: PropTypes.object.isRequired,
    //chessMan:PropTypes.string.isRequired
};

export default GameCell;