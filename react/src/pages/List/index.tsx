import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'
import {
  Layout,
  PageHeader,
  ButtonWithIcon,
  PageBlock,
  IconUpload,
} from 'vtex.styleguide'

import { TemplateList } from '../../Components/TemplateList'

export const EmailBuilder = () => {
  const { navigate } = useRuntime()

  const uploadIcon = <IconUpload />

  return (
    <>
      <Layout
        fullWidth
        pageHeader={
          <PageHeader
            title={
              <FormattedMessage id="admin.email-builder.navigation.label-title" />
            }
            subtitle={
              <FormattedMessage id="admin.email-builder.subtitle.label-title" />
            }
            linkLabel={
              <FormattedMessage id="admin.email-builder.backLink.label" />
            }
            onLinkClick={() => {
              navigate({
                page: 'admin.app.emailbuilder',
              })
            }}
          >
            <ButtonWithIcon
              variation="primary"
              icon={uploadIcon}
              onClick={() =>
                navigate({
                  page: 'admin.app.emailbuilderCreate',
                })
              }
            >
              <FormattedMessage id="admin.email-builder.createButton.label" />
            </ButtonWithIcon>
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
