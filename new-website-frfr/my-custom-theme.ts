import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #e7717d
		'--color-primary-50': '251 234 236', // #fbeaec
		'--color-primary-100': '250 227 229', // #fae3e5
		'--color-primary-200': '249 220 223', // #f9dcdf
		'--color-primary-300': '245 198 203', // #f5c6cb
		'--color-primary-400': '238 156 164', // #ee9ca4
		'--color-primary-500': '231 113 125', // #e7717d
		'--color-primary-600': '208 102 113', // #d06671
		'--color-primary-700': '173 85 94', // #ad555e
		'--color-primary-800': '139 68 75', // #8b444b
		'--color-primary-900': '113 55 61', // #71373d
		// secondary | #afd275
		'--color-secondary-50': '243 248 234', // #f3f8ea
		'--color-secondary-100': '239 246 227', // #eff6e3
		'--color-secondary-200': '235 244 221', // #ebf4dd
		'--color-secondary-300': '223 237 200', // #dfedc8
		'--color-secondary-400': '199 224 158', // #c7e09e
		'--color-secondary-500': '175 210 117', // #afd275
		'--color-secondary-600': '158 189 105', // #9ebd69
		'--color-secondary-700': '131 158 88', // #839e58
		'--color-secondary-800': '105 126 70', // #697e46
		'--color-secondary-900': '86 103 57', // #566739
		// tertiary | #c2cad0
		'--color-tertiary-50': '246 247 248', // #f6f7f8
		'--color-tertiary-100': '243 244 246', // #f3f4f6
		'--color-tertiary-200': '240 242 243', // #f0f2f3
		'--color-tertiary-300': '231 234 236', // #e7eaec
		'--color-tertiary-400': '212 218 222', // #d4dade
		'--color-tertiary-500': '194 202 208', // #c2cad0
		'--color-tertiary-600': '175 182 187', // #afb6bb
		'--color-tertiary-700': '146 152 156', // #92989c
		'--color-tertiary-800': '116 121 125', // #74797d
		'--color-tertiary-900': '95 99 102', // #5f6366
		// success | #afd275
		'--color-success-50': '243 248 234', // #f3f8ea
		'--color-success-100': '239 246 227', // #eff6e3
		'--color-success-200': '235 244 221', // #ebf4dd
		'--color-success-300': '223 237 200', // #dfedc8
		'--color-success-400': '199 224 158', // #c7e09e
		'--color-success-500': '175 210 117', // #afd275
		'--color-success-600': '158 189 105', // #9ebd69
		'--color-success-700': '131 158 88', // #839e58
		'--color-success-800': '105 126 70', // #697e46
		'--color-success-900': '86 103 57', // #566739
		// warning | #c2b9b0
		'--color-warning-50': '246 245 243', // #f6f5f3
		'--color-warning-100': '243 241 239', // #f3f1ef
		'--color-warning-200': '240 238 235', // #f0eeeb
		'--color-warning-300': '231 227 223', // #e7e3df
		'--color-warning-400': '212 206 200', // #d4cec8
		'--color-warning-500': '194 185 176', // #c2b9b0
		'--color-warning-600': '175 167 158', // #afa79e
		'--color-warning-700': '146 139 132', // #928b84
		'--color-warning-800': '116 111 106', // #746f6a
		'--color-warning-900': '95 91 86', // #5f5b56
		// error | #7e685a
		'--color-error-50': '236 232 230', // #ece8e6
		'--color-error-100': '229 225 222', // #e5e1de
		'--color-error-200': '223 217 214', // #dfd9d6
		'--color-error-300': '203 195 189', // #cbc3bd
		'--color-error-400': '165 149 140', // #a5958c
		'--color-error-500': '126 104 90', // #7e685a
		'--color-error-600': '113 94 81', // #715e51
		'--color-error-700': '95 78 68', // #5f4e44
		'--color-error-800': '76 62 54', // #4c3e36
		'--color-error-900': '62 51 44', // #3e332c
		// surface | #c2cad0
		'--color-surface-50': '246 247 248', // #f6f7f8
		'--color-surface-100': '243 244 246', // #f3f4f6
		'--color-surface-200': '240 242 243', // #f0f2f3
		'--color-surface-300': '231 234 236', // #e7eaec
		'--color-surface-400': '212 218 222', // #d4dade
		'--color-surface-500': '194 202 208', // #c2cad0
		'--color-surface-600': '175 182 187', // #afb6bb
		'--color-surface-700': '146 152 156', // #92989c
		'--color-surface-800': '116 121 125', // #74797d
		'--color-surface-900': '95 99 102' // #5f6366
	}
};
