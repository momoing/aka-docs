import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  userGuideSidebar: [
    {type: 'doc', id: 'user-guide/introduction',    label: 'Introduction'},
    {type: 'doc', id: 'user-guide/getting-started', label: 'Getting Started'},
    {
      type: 'category',
      label: 'Workflow Designer',
      collapsed: false,
      items: [
        'user-guide/workflow-designer/overview',
        'user-guide/workflow-designer/activities',
        'user-guide/workflow-designer/variables',
      ],
    },
    {
      type: 'category',
      label: 'Bot Management',
      items: [
        'user-guide/bot-management/create-bot',
        'user-guide/bot-management/schedule-bot',
      ],
    },
    {type: 'doc', id: 'user-guide/dashboard', label: 'Dashboard'},
  ],

  installationSidebar: [
    'installation/system-requirements',
    'installation/server-installation',
    'installation/agent-installation',
    'installation/license-activation',
    'installation/upgrade-guide',
  ],

  apiReferenceSidebar: [
    'api-reference/overview',
    'api-reference/authentication',
    {
      type: 'category',
      label: 'Endpoints',
      items: [
        'api-reference/endpoints/processes',
        'api-reference/endpoints/robots',
        'api-reference/endpoints/queues',
        'api-reference/endpoints/schedules',
      ],
    },
    'api-reference/error-codes',
  ],

  sdkSidebar: [
    'sdk/overview',
    'sdk/quickstart',
    {
      type: 'category',
      label: 'Custom Activities',
      items: [
        'sdk/custom-activities/create-activity',
        'sdk/custom-activities/publish-activity',
      ],
    },
    {
      type: 'category',
      label: '.NET SDK',
      items: [
        'sdk/dotnet-sdk/getting-started',
        'sdk/dotnet-sdk/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Python SDK',
      items: [
        'sdk/python-sdk/getting-started',
        'sdk/python-sdk/api-reference',
      ],
    },
  ],

  adminSidebar: [
    'admin/overview',
    'admin/user-management',
    'admin/role-permissions',
    'admin/monitoring',
    'admin/backup-restore',
    'admin/troubleshooting',
  ],
};

export default sidebars;
