import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

const NotFound: FC = () => {
	const meta: IMeta = {
		title: 'Not Found',
		description: 'Page is not found'
	}

	return (
		<>
			<Layout meta={meta} heading='Page is not found' />
			<div className='wrapper-inner-page'>404 | Page is not found</div>
		</>
	)
}

export default NotFound