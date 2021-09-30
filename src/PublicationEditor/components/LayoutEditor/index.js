import React from 'react';
import ControlContainer from '../Controls/ControlContainer';

export function LayoutEditor( {
	content,
	controls,
	saveChanges,
	cancelChanges,
	children,
} ) {
	return (
		<div>
			{ content.map( ( item, index ) => {
				// item.data.updateField = this.updateChunk.bind( this, index );
				item.data.fieldName = `field_${ index }`;
				// item.data.articleId = this.props.articleId;
				return (
					<ControlContainer
						position={ item.data.position }
						key={ item.id }
						moveItemUp={ this.moveItemUp.bind( this, item ) }
						moveItemDown={ this.moveItemDown.bind( this, item ) }
						removeItem={ this.removeItem.bind( this, item ) }
						isEditing={ item.data.editing }
					>
						{ React.createElement(
							controls[ item.type ],
							item.data
						) }
					</ControlContainer>
				);
			} ) }
		</div>
	);
}

export default LayoutEditor;
