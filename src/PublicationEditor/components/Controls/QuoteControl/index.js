import React, { useState } from 'react';
import { TextInput, ColorInput, SelectInput } from '../../Inputs';
import EditModal from '../../EditModal';

export function QuoteControl( {
	name,
	title,
	text,
	color,
	border,
	showIcon,
	author,
	setData,
} ) {
	const [ editing, setEditing ] = useState( false ),
		toggleEditable = () => setEditing( ! editing );

	if ( editing ) {
		return (
			<QuoteEditor
				text={ text }
				title={ title }
				color={ color }
				border={ border }
				showIcon={ showIcon }
				author={ author }
				setData={ setData }
				toggleEditable={ toggleEditable }
				name={ name }
			/>
		);
	}
	return (
		<QuoteDisplay
			text={ text }
			title={ title }
			color={ color }
			border={ border }
			showIcon={ showIcon }
			author={ author }
			onClick={ toggleEditable }
		/>
	);
}

QuoteControl.defaultProps = {
	text: '',
	title: '',
	color: 'black',
	border: 'none',
	showIcon: '1',
	author: '',
	editing: false,
};

function QuoteEditor( props ) {
	const [ text, setText ] = useState( props.text ),
		[ title, setTitle ] = useState( props.title ),
		[ color, setColor ] = useState( props.color ),
		[ border, setBorder ] = useState( props.border ),
		[ showIcon, setShowIcon ] = useState( props.showIcon ),
		[ author, setAuthor ] = useState( props.author ),
		[ error, setError ] = useState( '' ),
		saveChanges = ( e ) => {
			e.preventDefault();
			if ( props.required && ! text.length ) {
				setError( 'Please enter some quote text to continue' );
			} else {
				props.setData( {
					text,
					title,
					color,
					border,
					showIcon,
					author,
				} );
				setError( '' );
				props.toggleEditable();
			}
		},
		cancelChanges = () => props.toggleEditable();

	return (
		<EditModal
			saveChanges={ saveChanges }
			cancelChanges={ cancelChanges }
			error={ error }
		>
			<TextInput
				name={ props.name + '_title' }
				label="Quote Title"
				value={ title }
				onChange={ setTitle }
			/>
			<TextInput
				name={ props.name + '_text' }
				label="Quote Text"
				value={ text }
				onChange={ setText }
			/>
			<TextInput
				name={ props.name + '_author' }
				label="Quote Author"
				value={ author }
				onChange={ setAuthor }
			/>
			<SelectInput
				name={ props.name + '_icon' }
				label="Display Quote Icon"
				value={ showIcon }
				options={ [
					{ title: 'Display Icon', value: '1' },
					{ title: 'Hide Icon', value: '0' },
				] }
				onChange={ setShowIcon }
			/>
			<ColorInput
				name={ props.name + '_color' }
				label="Quote Color"
				value={ color }
				onChange={ setColor }
			/>
			<SelectInput
				name={ props.name + '_border' }
				label="Quote Border"
				value={ border }
				options={ [
					{ value: '', title: 'None' },
					{ value: 'top', title: 'Top' },
					{ value: 'bottom', title: 'Bottom' },
					{ value: 'both', title: 'Top and Bottom' },
				] }
				onChange={ setBorder }
			/>
		</EditModal>
	);
}

function QuoteDisplay( props ) {
	let classList = 'pull-quote';

	if ( props.color ) {
		classList += ` color-${ props.color }`;
	}

	if ( props.border ) {
		classList += ` border-${ props.border }`;
	}

	if ( props.showIcon === '1' ) {
		classList += ' pull-quote-spacing-large';
	}
	return (
		<blockquote className={ classList } onClick={ props.onClick }>
			{ props.showIcon === '1' && (
				<div className="pull-quote-icon">&ldquo;</div>
			) }
			{ props.title && <h2>{ props.title }</h2> }
			<p>
				&ldquo;
				{ props.text ? props.text : '  [Enter Quote Text Here]  ' }
				&rdquo;
			</p>
			{ props.author && (
				<cite className="pull-quote-author"> { props.author } </cite>
			) }
		</blockquote>
	);
}
export default QuoteControl;
