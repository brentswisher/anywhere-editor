import React, { useState } from 'react';

export function ControlContainer( props ) {
	const [ isFocused, setFocused ] = useState( false );
	let movementButtons = null,
		movementButtonClass = 'menu chunkActions',
		containerClass = 'controlContainer';
	if ( isFocused && ! props.isEditing ) {
		if ( props.position === 'right' ) {
			movementButtonClass += ' chunkActions-right';
		} else if ( props.position === 'left' ) {
			movementButtonClass += ' chunkActions-left';
		}

		movementButtons = (
			<ul className={ movementButtonClass }>
				<li>
					<button
						type="button"
						className="button secondary"
						onClick={ props.moveItemUp }
					>
						&uarr;
						<span className="show-for-sr">Move Up</span>
					</button>
				</li>
				<li>
					<button
						type="button"
						className="button secondary"
						onClick={ props.moveItemDown }
					>
						&darr;
						<span className="show-for-sr">Move Down</span>
					</button>
				</li>
				<li>
					<button
						type="button"
						className="button alert"
						onClick={ props.removeItem }
					>
						X<span className="show-for-sr">Delete</span>
					</button>
				</li>
			</ul>
		);
	}

	if ( this.state.isFocused ) {
		containerClass += ' active';
	}

	//When editing a chunk, wrap it in an absolute positioned container inside a relative
	//positioned ControlContainer to offset any weird wrapping of other chunks it is positioned over
	if ( props.isEditing ) {
		containerClass += ' editing';
	}

	return (
		<div
			tabIndex="0"
			className={ containerClass }
			onMouseEnter={ setFocused( true ) }
			onMouseLeave={ setFocused( false ) }
		>
			{ movementButtons }
			{ props.children }
		</div>
	);
}

export default ControlContainer;
