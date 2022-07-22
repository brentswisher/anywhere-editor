import React, { useState } from 'react';
import { TextInput, ColorInput, SelectInput } from '../../Inputs';
import EditModal from '../../EditModal';

import { useSelector } from 'react-redux';
import { selectCssClasses, selectColors } from '../../LayoutEditor/configSlice';

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
		colorOptions = useSelector( selectColors ),
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
				colors={ colorOptions }
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
	color: '',
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
				colors={ props.colors }
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
	const cssClasses = useSelector( selectCssClasses ),
		classList = [ cssClasses[ 'pull-quote' ] ];

	if ( props.border ) {
		classList.push( cssClasses[ `border-${ props.border }` ] );
	}

	if ( props.showIcon === '1' ) {
		classList.push( cssClasses[ 'pull-quote-spacing-large' ] );
	}
	return (
		<blockquote
			className={ classList.join( ' ' ) }
			onClick={ props.onClick }
			style={ { color: props.color } }
		>
			{ props.showIcon === '1' && (
				<div
					className={ cssClasses[ 'pull-quote-icon' ] }
					style={ { color: props.color } }
				>
					&ldquo;
				</div>
			) }
			{ props.title && (
				<h2
					className={ cssClasses[ 'pull-quote-title' ] }
					style={ { color: props.color } }
				>
					{ props.title }
				</h2>
			) }
			<p
				className={ cssClasses[ 'pull-quote-content' ] }
				style={ { color: props.color } }
			>
				&ldquo;
				{ props.text ? props.text : '  [Enter Quote Text Here]  ' }
				&rdquo;
			</p>
			{ props.author && (
				<cite
					className={ cssClasses[ 'pull-quote-author' ] }
					style={ { color: props.color } }
				>
					{ ' ' }
					{ props.author }{ ' ' }
				</cite>
			) }
		</blockquote>
	);
}
export default QuoteControl;
