import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'
import { Layout, PageHeader, Button, PageBlock } from 'vtex.styleguide'

import { TemplateList } from '../../Components/TemplateList'

export const EmailBuilder = () => {
  const { navigate } = useRuntime()

  return (
    <>
      <Layout
        fullWidth
        pageHeader={
          <PageHeader
            title={
              <FormattedMessage id="admin.email-builder.navigation.label-title" />
            }
            linkLabel={
              <FormattedMessage id="admin.email-builder.backLink.label" />
            }
            onLinkClick={() =>
              navigate({
                page: 'admin.container',
              })
            }
          >
            <Button variation="primary">
              <FormattedMessage id="admin.email-builder.createButton.label" />
            </Button>
          </PageHeader>
        }
      >
        <PageBlock>
          <TemplateList />
        </PageBlock>
      </Layout>
    </>
  )
}
