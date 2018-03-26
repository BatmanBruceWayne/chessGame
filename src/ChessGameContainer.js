import React from 'react';
import {connect} from 'react-redux';
import GameCell from "./GameCell";
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
        const chessMen = this.props.chessMen;
        let board = [
            {
                x: 1, y: 1, status: "onChessman", chessMan: chessMen.WhiteRook
            },
            {
                x: 1, y: 2, status: "onChessman", chessMan: chessMen.WhiteKnight
            },
            {
                x: 1, y: 3, status: "onChessman", chessMan: chessMen.WhiteBishop
            },
            {
                x: 1, y: 4, status: "onChessman", chessMan: chessMen.WhiteQueen
            },
            {
                x: 1, y: 5, status: "onChessman", chessMan: chessMen.WhiteKing
            },
            {
                x: 1, y: 6, status: "onChessman", chessMan: chessMen.WhiteBishop
            },
            {
                x: 1, y: 7, status: "onChessman", chessMan: chessMen.WhiteKnight
            },
            {
                x: 1, y: 8, status: "onChessman", chessMan: chessMen.WhiteRook
            }
        ];
        for (let i = 1; i < 9; i++) {
            board = [...board, {
                x: 2, y: i, status: "onChessman", chessMan: chessMen.WhitePawn
            }];
        }
        for (let i = 16; i < 48; i++) {
            let y = i % 8 + 1;
            let x = (i + 1 - y) / 8 + 1;
            board = [...board, {
                x: x, y: y, status: "empty", chessMan: {image: ''}
            }];
        }
        for (let i = 1; i < 9; i++) {
            board = [...board, {
                x: 7, y: i, status: "onChessman", chessMan: chessMen.BlackPawn
            }];
        }
        board = [...board,
            {
                x: 8, y: 1, status: "onChessman", chessMan: chessMen.BlackRook
            },
            {
                x: 8, y: 2, status: "onChessman", chessMan: chessMen.BlackKnight
            },
            {
                x: 8, y: 3, status: "onChessman", chessMan: chessMen.BlackBishop
            },
            {
                x: 8, y: 4, status: "onChessman", chessMan: chessMen.BlackQueen
            },
            {
                x: 8, y: 5, status: "onChessman", chessMan: chessMen.BlackKing
            },
            {
                x: 8, y: 6, status: "onChessman", chessMan: chessMen.BlackBishop
            },
            {
                x: 8, y: 7, status: "onChessman", chessMan: chessMen.BlackKnight
            },
            {
                x: 8, y: 8, status: "onChessman", chessMan: chessMen.BlackRook
            }
        ];
        this.props.actions.createBoard(board);
    }

    //coordinateToIndex(){}

    render() {
        return (
            <div>
                <div className="box board">
                    {
                        this.props.board && this.props.board.map((cell, index) => {
                            return (
                                <GameCell
                                    key={index}
                                    cell={cell}
                                    //chessMan={}
                                />
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
    actions: PropTypes.object.isRequired,
    chessMen: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        board: state.chessGame.board,
        chessMen: state.chessGame.chessMen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChessGameContainer);