/* !!
 * Code By Joenix
 * ----- ----- -----
 * Compatible ES2016+
 * ===== ===== =====
 */

module.exports = (

	group = [],

	callback = () => {},

	action = {

		each ( group, callback, index )
		{
			for ( index in group )
			{
				if ( callback( group[ index ], index ) === false )
				{
					break;
				}
			}
		},

		cip ( depend )
		{
			return depend.default || depend;
		}

	},

	result = {}

) => {

	action.each( group, ( name ) => {

		result[ name ] = action.cip( callback( name ) );

	});

	return result;

}
