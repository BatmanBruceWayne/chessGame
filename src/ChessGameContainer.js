import React from 'react';
import {connect} from 'react-redux';
//import GameCell from "./GameCell";
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import *as actions from "./chessGameAction";

// Import actions here!!

class ChessGameContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.createBoard = this.createBoard.bind(this);
    }

    componentWillMount() {
        this.createBoard();
    }

    createBoard() {
        let board = [];
        for (let i = 1; i < 9; i++) {
            for (let j = 1; j < 9; j++) {
                board.push({
                    x: i,
                    y: j
                });
            }
        }
        this.props.actions.createBoard(board);
    }

    render() {
        return (
            <div>
                <div className="box board">
                    {
                        this.props.board && this.props.board.map((cell, index) => {
                            let cellSum = cell.x + cell.y;
                            return (
                                <div key={index}
                                     className="cell"
                                     style={{
                                         backgroundColor: (cellSum % 2 === 1) ? "#A0522D" : "#F5DEB3"
                                     }}>
                                    {`${cell.x} ${cell.y}`}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

ChessGameContainer.propTypes = {
    board: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        board: state.chessGame.board
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChessGameContainer);