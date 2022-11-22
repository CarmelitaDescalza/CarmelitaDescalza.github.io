<?php
/**
 * Recommended plugins
 *
 * @package minimal-blocks
 */
if ( ! function_exists( 'minimal_blocks_recommended_plugins' ) ) :
	/**
	 * Recommend plugins.
	 *
	 * @since 1.0.0
	 */
	function minimal_blocks_recommended_plugins() {
		$plugins = array(
            array(
                'name'     => __( 'MailChimp for WordPress', 'minimal-blocks' ),
                'slug'     => 'mailchimp-for-wp',
                'required' => false,
            ),
			array(
                'name'     => __( 'Rankchecker.io Integration', 'minimal-blocks' ),
                'slug'     => 'rankchecker-io-integration',
                'required' => false,
			),
		);
		tgmpa( $plugins );
	}
endif;
add_action( 'tgmpa_register', 'minimal_blocks_recommended_plugins' );
