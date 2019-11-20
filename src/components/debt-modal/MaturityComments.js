import React, { Component } from 'react';
import './Maturity.css'

class MaturityComments extends Component {
    render() {
        return (
            <div class="comment-container border-bottom">
                    <div class="comment text-muted">Comments</div>
                    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                    +Add
                    </button>
            </div>
        );
    }
}

export default MaturityComments;