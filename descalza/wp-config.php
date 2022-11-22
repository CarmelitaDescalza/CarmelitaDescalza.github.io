<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_descalza' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=y0-$l0:AZJlH}a%Eat%v&=m=+63J4^&?g#1s#*cHv:;]tG}$V~&{KHI-W&o(L<-' );
define( 'SECURE_AUTH_KEY',  '-FOS}2CVqk_?rC|4|9E=@52>jaqn}xK.Bcp%ctC2@r^s&}Lj<#4yo1Z1/GEuFn{]' );
define( 'LOGGED_IN_KEY',    'ro7XVUI=dhS,yJOQ`*rhk&3w>6f9@?~+5-qZD:3:6*{y|1js8&d(:Y#8,fPR=QZ*' );
define( 'NONCE_KEY',        '4zb$K~3KEj2HJ-z=KI0:6RcI{U DSAK K?=i:Y+5v<{Si o*u+`QaD;DS6`C{};J' );
define( 'AUTH_SALT',        'X:/o8+lX[1#IZz AjNZ:qV)zf>IdSrV^E1y8CYO;*h^Aj?-I0EzkTZM4Aaw. >rL' );
define( 'SECURE_AUTH_SALT', '4Y2fLl0nu%;U`vKF*j7DS^5W}cAuU7^}Oa<p?tr8:u`5[mdV6vm*Y_+o8JMcEi)N' );
define( 'LOGGED_IN_SALT',   'x: -mE~06zzNr6UrZ7oH!NB#PjfHkZrI#D=]nlBf !C1o<N=3u5C+7F(wrF@]~J~' );
define( 'NONCE_SALT',       'j,9 ,yOX4zx]MdnD% R/4i<X)Jo]1f^j41DY%(8m9q0hi}UnRSEmlMA8:ohordxg' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
