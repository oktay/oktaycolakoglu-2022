export default function handler(_req, res) {
  if (process.env.NODE_ENV === 'production') {
    res.status(404).send('Not found');
    return;
  }

  res.status(200).json({
    repos: [
      {
        id: 508841297,
        node_id: 'R_kgDOHlRNUQ',
        name: 'feyz',
        full_name: 'oktay/feyz',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/feyz',
        description: 'Kafa açan içerikler',
        fork: true,
        url: 'https://api.github.com/repos/oktay/feyz',
        forks_url: 'https://api.github.com/repos/oktay/feyz/forks',
        keys_url: 'https://api.github.com/repos/oktay/feyz/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/feyz/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/feyz/teams',
        hooks_url: 'https://api.github.com/repos/oktay/feyz/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/feyz/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/feyz/events',
        assignees_url:
          'https://api.github.com/repos/oktay/feyz/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/feyz/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/feyz/tags',
        blobs_url: 'https://api.github.com/repos/oktay/feyz/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/oktay/feyz/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/oktay/feyz/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/oktay/feyz/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/oktay/feyz/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/oktay/feyz/languages',
        stargazers_url: 'https://api.github.com/repos/oktay/feyz/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/feyz/contributors',
        subscribers_url: 'https://api.github.com/repos/oktay/feyz/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/feyz/subscription',
        commits_url: 'https://api.github.com/repos/oktay/feyz/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/feyz/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/feyz/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/feyz/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/feyz/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/feyz/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/feyz/merges',
        archive_url:
          'https://api.github.com/repos/oktay/feyz/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/oktay/feyz/downloads',
        issues_url: 'https://api.github.com/repos/oktay/feyz/issues{/number}',
        pulls_url: 'https://api.github.com/repos/oktay/feyz/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/feyz/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/feyz/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/oktay/feyz/labels{/name}',
        releases_url: 'https://api.github.com/repos/oktay/feyz/releases{/id}',
        deployments_url: 'https://api.github.com/repos/oktay/feyz/deployments',
        created_at: '2022-06-29T20:47:57Z',
        updated_at: '2022-06-29T21:04:05Z',
        pushed_at: '2022-06-29T21:07:21Z',
        git_url: 'git://github.com/oktay/feyz.git',
        ssh_url: 'git@github.com:oktay/feyz.git',
        clone_url: 'https://github.com/oktay/feyz.git',
        svn_url: 'https://github.com/oktay/feyz',
        homepage: 'https://feyz.li',
        size: 476,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'other',
          name: 'Other',
          spdx_id: 'NOASSERTION',
          url: null,
          node_id: 'MDc6TGljZW5zZTA=',
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 501012208,
        node_id: 'R_kgDOHdzW8A',
        name: 'oktaycolakoglu-2022',
        full_name: 'oktay/oktaycolakoglu-2022',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/oktaycolakoglu-2022',
        description: 'My personal homepage with Next.js & Tailwind CSS',
        fork: false,
        url: 'https://api.github.com/repos/oktay/oktaycolakoglu-2022',
        forks_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/forks',
        keys_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/teams',
        hooks_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/events',
        assignees_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/oktaycolakoglu-2022/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/merges',
        archive_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2022/deployments',
        created_at: '2022-06-07T21:39:59Z',
        updated_at: '2022-06-29T21:36:50Z',
        pushed_at: '2022-06-29T21:29:21Z',
        git_url: 'git://github.com/oktay/oktaycolakoglu-2022.git',
        ssh_url: 'git@github.com:oktay/oktaycolakoglu-2022.git',
        clone_url: 'https://github.com/oktay/oktaycolakoglu-2022.git',
        svn_url: 'https://github.com/oktay/oktaycolakoglu-2022',
        homepage: 'https://oktaycolakoglu.com',
        size: 149,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          'dribbble-api',
          'github-api',
          'nextjs',
          'personal-website',
          'tailwindcss',
        ],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 494273962,
        node_id: 'R_kgDOHXYFqg',
        name: 'rickandmorty',
        full_name: 'oktay/rickandmorty',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/rickandmorty',
        description: 'React app with Rick & Morty API',
        fork: false,
        url: 'https://api.github.com/repos/oktay/rickandmorty',
        forks_url: 'https://api.github.com/repos/oktay/rickandmorty/forks',
        keys_url:
          'https://api.github.com/repos/oktay/rickandmorty/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/rickandmorty/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/rickandmorty/teams',
        hooks_url: 'https://api.github.com/repos/oktay/rickandmorty/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/rickandmorty/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/rickandmorty/events',
        assignees_url:
          'https://api.github.com/repos/oktay/rickandmorty/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/rickandmorty/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/rickandmorty/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/rickandmorty/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/rickandmorty/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/rickandmorty/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/rickandmorty/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/rickandmorty/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/rickandmorty/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/rickandmorty/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/rickandmorty/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/rickandmorty/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/rickandmorty/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/rickandmorty/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/rickandmorty/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/rickandmorty/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/rickandmorty/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/rickandmorty/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/rickandmorty/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/rickandmorty/merges',
        archive_url:
          'https://api.github.com/repos/oktay/rickandmorty/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/rickandmorty/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/rickandmorty/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/rickandmorty/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/rickandmorty/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/rickandmorty/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/rickandmorty/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/rickandmorty/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/rickandmorty/deployments',
        created_at: '2022-05-20T00:49:26Z',
        updated_at: '2022-05-20T00:52:24Z',
        pushed_at: '2022-05-22T11:08:19Z',
        git_url: 'git://github.com/oktay/rickandmorty.git',
        ssh_url: 'git@github.com:oktay/rickandmorty.git',
        clone_url: 'https://github.com/oktay/rickandmorty.git',
        svn_url: 'https://github.com/oktay/rickandmorty',
        homepage: 'rickandmorty-gold.vercel.app',
        size: 328,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 477469733,
        node_id: 'R_kgDOHHWcJQ',
        name: 'tmdbapp',
        full_name: 'oktay/tmdbapp',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/tmdbapp',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/oktay/tmdbapp',
        forks_url: 'https://api.github.com/repos/oktay/tmdbapp/forks',
        keys_url: 'https://api.github.com/repos/oktay/tmdbapp/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/tmdbapp/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/tmdbapp/teams',
        hooks_url: 'https://api.github.com/repos/oktay/tmdbapp/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/tmdbapp/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/tmdbapp/events',
        assignees_url:
          'https://api.github.com/repos/oktay/tmdbapp/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/tmdbapp/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/tmdbapp/tags',
        blobs_url: 'https://api.github.com/repos/oktay/tmdbapp/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/tmdbapp/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/tmdbapp/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/oktay/tmdbapp/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/tmdbapp/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/oktay/tmdbapp/languages',
        stargazers_url: 'https://api.github.com/repos/oktay/tmdbapp/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/tmdbapp/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/tmdbapp/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/tmdbapp/subscription',
        commits_url: 'https://api.github.com/repos/oktay/tmdbapp/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/tmdbapp/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/tmdbapp/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/tmdbapp/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/tmdbapp/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/tmdbapp/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/tmdbapp/merges',
        archive_url:
          'https://api.github.com/repos/oktay/tmdbapp/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/oktay/tmdbapp/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/tmdbapp/issues{/number}',
        pulls_url: 'https://api.github.com/repos/oktay/tmdbapp/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/tmdbapp/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/tmdbapp/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/oktay/tmdbapp/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/tmdbapp/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/tmdbapp/deployments',
        created_at: '2022-04-03T21:25:57Z',
        updated_at: '2022-06-08T10:34:56Z',
        pushed_at: '2022-06-23T17:01:35Z',
        git_url: 'git://github.com/oktay/tmdbapp.git',
        ssh_url: 'git@github.com:oktay/tmdbapp.git',
        clone_url: 'https://github.com/oktay/tmdbapp.git',
        svn_url: 'https://github.com/oktay/tmdbapp',
        homepage: null,
        size: 554,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 440344133,
        node_id: 'R_kgDOGj8eRQ',
        name: 'hotel-booking',
        full_name: 'oktay/hotel-booking',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/hotel-booking',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/oktay/hotel-booking',
        forks_url: 'https://api.github.com/repos/oktay/hotel-booking/forks',
        keys_url:
          'https://api.github.com/repos/oktay/hotel-booking/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/hotel-booking/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/hotel-booking/teams',
        hooks_url: 'https://api.github.com/repos/oktay/hotel-booking/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/hotel-booking/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/hotel-booking/events',
        assignees_url:
          'https://api.github.com/repos/oktay/hotel-booking/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/hotel-booking/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/hotel-booking/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/hotel-booking/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/hotel-booking/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/hotel-booking/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/hotel-booking/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/hotel-booking/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/hotel-booking/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/hotel-booking/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/hotel-booking/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/hotel-booking/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/hotel-booking/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/hotel-booking/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/hotel-booking/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/hotel-booking/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/hotel-booking/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/hotel-booking/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/hotel-booking/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/hotel-booking/merges',
        archive_url:
          'https://api.github.com/repos/oktay/hotel-booking/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/hotel-booking/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/hotel-booking/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/hotel-booking/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/hotel-booking/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/hotel-booking/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/hotel-booking/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/hotel-booking/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/hotel-booking/deployments',
        created_at: '2021-12-21T00:29:59Z',
        updated_at: '2021-12-21T07:54:47Z',
        pushed_at: '2021-12-21T07:55:57Z',
        git_url: 'git://github.com/oktay/hotel-booking.git',
        ssh_url: 'git@github.com:oktay/hotel-booking.git',
        clone_url: 'https://github.com/oktay/hotel-booking.git',
        svn_url: 'https://github.com/oktay/hotel-booking',
        homepage: 'hotel-booking-blush.vercel.app',
        size: 299,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'Vue',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 407888757,
        node_id: 'MDEwOlJlcG9zaXRvcnk0MDc4ODg3NTc=',
        name: 'gatsby-starter-novela',
        full_name: 'oktay/gatsby-starter-novela',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/gatsby-starter-novela',
        description:
          'A starter for Novela, the simplest way to start publishing with Gatsby.',
        fork: true,
        url: 'https://api.github.com/repos/oktay/gatsby-starter-novela',
        forks_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/forks',
        keys_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/teams',
        hooks_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/events',
        assignees_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/merges',
        archive_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/gatsby-starter-novela/deployments',
        created_at: '2021-09-18T14:53:38Z',
        updated_at: '2021-09-18T14:53:39Z',
        pushed_at: '2019-08-03T18:57:46Z',
        git_url: 'git://github.com/oktay/gatsby-starter-novela.git',
        ssh_url: 'git@github.com:oktay/gatsby-starter-novela.git',
        clone_url: 'https://github.com/oktay/gatsby-starter-novela.git',
        svn_url: 'https://github.com/oktay/gatsby-starter-novela',
        homepage: 'https://novela.narative.co',
        size: 1775,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 405118053,
        node_id: 'MDEwOlJlcG9zaXRvcnk0MDUxMTgwNTM=',
        name: 'eleventy-web-starter',
        full_name: 'oktay/eleventy-web-starter',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/eleventy-web-starter',
        description:
          'Eleventy Web Starter is a lightweight Eleventy boilerplate utilising, ESBuild Tailwind and PostCSS.',
        fork: true,
        url: 'https://api.github.com/repos/oktay/eleventy-web-starter',
        forks_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/forks',
        keys_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/teams',
        hooks_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/events',
        assignees_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/merges',
        archive_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/eleventy-web-starter/deployments',
        created_at: '2021-09-10T14:59:44Z',
        updated_at: '2021-09-10T14:59:45Z',
        pushed_at: '2021-08-10T21:52:40Z',
        git_url: 'git://github.com/oktay/eleventy-web-starter.git',
        ssh_url: 'git@github.com:oktay/eleventy-web-starter.git',
        clone_url: 'https://github.com/oktay/eleventy-web-starter.git',
        svn_url: 'https://github.com/oktay/eleventy-web-starter',
        homepage: 'https://eleventywebstarter.netlify.app',
        size: 6504,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: true,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 400505813,
        node_id: 'MDEwOlJlcG9zaXRvcnk0MDA1MDU4MTM=',
        name: 'order-summary',
        full_name: 'oktay/order-summary',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/order-summary',
        description: 'Basic layout with TailwindCSS',
        fork: false,
        url: 'https://api.github.com/repos/oktay/order-summary',
        forks_url: 'https://api.github.com/repos/oktay/order-summary/forks',
        keys_url:
          'https://api.github.com/repos/oktay/order-summary/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/order-summary/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/order-summary/teams',
        hooks_url: 'https://api.github.com/repos/oktay/order-summary/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/order-summary/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/order-summary/events',
        assignees_url:
          'https://api.github.com/repos/oktay/order-summary/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/order-summary/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/order-summary/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/order-summary/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/order-summary/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/order-summary/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/order-summary/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/order-summary/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/order-summary/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/order-summary/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/order-summary/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/order-summary/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/order-summary/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/order-summary/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/order-summary/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/order-summary/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/order-summary/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/order-summary/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/order-summary/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/order-summary/merges',
        archive_url:
          'https://api.github.com/repos/oktay/order-summary/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/order-summary/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/order-summary/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/order-summary/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/order-summary/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/order-summary/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/order-summary/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/order-summary/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/order-summary/deployments',
        created_at: '2021-08-27T12:43:51Z',
        updated_at: '2021-08-27T13:12:42Z',
        pushed_at: '2021-08-27T13:12:39Z',
        git_url: 'git://github.com/oktay/order-summary.git',
        ssh_url: 'git@github.com:oktay/order-summary.git',
        clone_url: 'https://github.com/oktay/order-summary.git',
        svn_url: 'https://github.com/oktay/order-summary',
        homepage: 'order-summary-psi.vercel.app',
        size: 235,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'HTML',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 398100464,
        node_id: 'MDEwOlJlcG9zaXRvcnkzOTgxMDA0NjQ=',
        name: 'credit-card-example',
        full_name: 'oktay/credit-card-example',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/credit-card-example',
        description: 'Basic credit card visualizer with jQuery & TailwindCSS',
        fork: false,
        url: 'https://api.github.com/repos/oktay/credit-card-example',
        forks_url:
          'https://api.github.com/repos/oktay/credit-card-example/forks',
        keys_url:
          'https://api.github.com/repos/oktay/credit-card-example/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/credit-card-example/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/oktay/credit-card-example/teams',
        hooks_url:
          'https://api.github.com/repos/oktay/credit-card-example/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/credit-card-example/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/oktay/credit-card-example/events',
        assignees_url:
          'https://api.github.com/repos/oktay/credit-card-example/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/credit-card-example/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/credit-card-example/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/credit-card-example/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/credit-card-example/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/credit-card-example/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/credit-card-example/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/credit-card-example/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/credit-card-example/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/credit-card-example/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/credit-card-example/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/credit-card-example/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/credit-card-example/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/credit-card-example/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/credit-card-example/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/credit-card-example/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/credit-card-example/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/credit-card-example/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/credit-card-example/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/oktay/credit-card-example/merges',
        archive_url:
          'https://api.github.com/repos/oktay/credit-card-example/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/credit-card-example/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/credit-card-example/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/credit-card-example/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/credit-card-example/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/credit-card-example/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/credit-card-example/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/credit-card-example/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/credit-card-example/deployments',
        created_at: '2021-08-19T23:35:19Z',
        updated_at: '2021-08-20T12:22:35Z',
        pushed_at: '2021-08-20T12:22:32Z',
        git_url: 'git://github.com/oktay/credit-card-example.git',
        ssh_url: 'git@github.com:oktay/credit-card-example.git',
        clone_url: 'https://github.com/oktay/credit-card-example.git',
        svn_url: 'https://github.com/oktay/credit-card-example',
        homepage: 'credit-card-example.vercel.app',
        size: 103,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'HTML',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 395156250,
        node_id: 'MDEwOlJlcG9zaXRvcnkzOTUxNTYyNTA=',
        name: 'moviesh',
        full_name: 'oktay/moviesh',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/moviesh',
        description: 'Movie/TV Show app with React and tmdb api',
        fork: false,
        url: 'https://api.github.com/repos/oktay/moviesh',
        forks_url: 'https://api.github.com/repos/oktay/moviesh/forks',
        keys_url: 'https://api.github.com/repos/oktay/moviesh/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/moviesh/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/moviesh/teams',
        hooks_url: 'https://api.github.com/repos/oktay/moviesh/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/moviesh/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/moviesh/events',
        assignees_url:
          'https://api.github.com/repos/oktay/moviesh/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/moviesh/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/moviesh/tags',
        blobs_url: 'https://api.github.com/repos/oktay/moviesh/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/moviesh/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/moviesh/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/oktay/moviesh/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/moviesh/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/oktay/moviesh/languages',
        stargazers_url: 'https://api.github.com/repos/oktay/moviesh/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/moviesh/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/moviesh/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/moviesh/subscription',
        commits_url: 'https://api.github.com/repos/oktay/moviesh/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/moviesh/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/moviesh/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/moviesh/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/moviesh/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/moviesh/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/moviesh/merges',
        archive_url:
          'https://api.github.com/repos/oktay/moviesh/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/oktay/moviesh/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/moviesh/issues{/number}',
        pulls_url: 'https://api.github.com/repos/oktay/moviesh/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/moviesh/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/moviesh/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/oktay/moviesh/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/moviesh/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/moviesh/deployments',
        created_at: '2021-08-12T01:06:57Z',
        updated_at: '2021-08-20T12:32:26Z',
        pushed_at: '2021-08-16T19:52:52Z',
        git_url: 'git://github.com/oktay/moviesh.git',
        ssh_url: 'git@github.com:oktay/moviesh.git',
        clone_url: 'https://github.com/oktay/moviesh.git',
        svn_url: 'https://github.com/oktay/moviesh',
        homepage: 'moviesh.vercel.app',
        size: 541,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 389167379,
        node_id: 'MDEwOlJlcG9zaXRvcnkzODkxNjczNzk=',
        name: 'shortly',
        full_name: 'oktay/shortly',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/shortly',
        description: 'Short url app with React & shrtcode API',
        fork: false,
        url: 'https://api.github.com/repos/oktay/shortly',
        forks_url: 'https://api.github.com/repos/oktay/shortly/forks',
        keys_url: 'https://api.github.com/repos/oktay/shortly/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/shortly/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/shortly/teams',
        hooks_url: 'https://api.github.com/repos/oktay/shortly/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/shortly/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/shortly/events',
        assignees_url:
          'https://api.github.com/repos/oktay/shortly/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/shortly/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/shortly/tags',
        blobs_url: 'https://api.github.com/repos/oktay/shortly/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/shortly/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/shortly/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/oktay/shortly/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/shortly/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/oktay/shortly/languages',
        stargazers_url: 'https://api.github.com/repos/oktay/shortly/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/shortly/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/shortly/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/shortly/subscription',
        commits_url: 'https://api.github.com/repos/oktay/shortly/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/shortly/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/shortly/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/shortly/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/shortly/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/shortly/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/shortly/merges',
        archive_url:
          'https://api.github.com/repos/oktay/shortly/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/oktay/shortly/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/shortly/issues{/number}',
        pulls_url: 'https://api.github.com/repos/oktay/shortly/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/shortly/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/shortly/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/oktay/shortly/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/shortly/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/shortly/deployments',
        created_at: '2021-07-24T18:02:24Z',
        updated_at: '2021-08-10T14:10:17Z',
        pushed_at: '2021-08-10T14:10:15Z',
        git_url: 'git://github.com/oktay/shortly.git',
        ssh_url: 'git@github.com:oktay/shortly.git',
        clone_url: 'https://github.com/oktay/shortly.git',
        svn_url: 'https://github.com/oktay/shortly',
        homepage: 'shortly-eosin.vercel.app',
        size: 450,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 382636977,
        node_id: 'MDEwOlJlcG9zaXRvcnkzODI2MzY5Nzc=',
        name: 'yemeksepeti-basket',
        full_name: 'oktay/yemeksepeti-basket',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/yemeksepeti-basket',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/oktay/yemeksepeti-basket',
        forks_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/forks',
        keys_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/teams',
        hooks_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/events',
        assignees_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/yemeksepeti-basket/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/merges',
        archive_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/yemeksepeti-basket/deployments',
        created_at: '2021-07-03T14:35:18Z',
        updated_at: '2021-07-05T08:16:57Z',
        pushed_at: '2021-07-05T08:16:54Z',
        git_url: 'git://github.com/oktay/yemeksepeti-basket.git',
        ssh_url: 'git@github.com:oktay/yemeksepeti-basket.git',
        clone_url: 'https://github.com/oktay/yemeksepeti-basket.git',
        svn_url: 'https://github.com/oktay/yemeksepeti-basket',
        homepage: 'yemeksepeti-basket.vercel.app',
        size: 317,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 374386620,
        node_id: 'MDEwOlJlcG9zaXRvcnkzNzQzODY2MjA=',
        name: 'dummy-store',
        full_name: 'oktay/dummy-store',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/dummy-store',
        description: 'Dummy store with vue, vuex',
        fork: false,
        url: 'https://api.github.com/repos/oktay/dummy-store',
        forks_url: 'https://api.github.com/repos/oktay/dummy-store/forks',
        keys_url:
          'https://api.github.com/repos/oktay/dummy-store/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/dummy-store/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/dummy-store/teams',
        hooks_url: 'https://api.github.com/repos/oktay/dummy-store/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/dummy-store/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/dummy-store/events',
        assignees_url:
          'https://api.github.com/repos/oktay/dummy-store/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/dummy-store/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/dummy-store/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/dummy-store/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/dummy-store/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/dummy-store/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/dummy-store/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/dummy-store/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/dummy-store/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/dummy-store/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/dummy-store/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/dummy-store/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/dummy-store/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/dummy-store/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/dummy-store/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/dummy-store/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/dummy-store/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/dummy-store/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/dummy-store/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/dummy-store/merges',
        archive_url:
          'https://api.github.com/repos/oktay/dummy-store/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/dummy-store/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/dummy-store/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/dummy-store/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/dummy-store/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/dummy-store/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/dummy-store/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/dummy-store/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/dummy-store/deployments',
        created_at: '2021-06-06T14:51:11Z',
        updated_at: '2021-06-06T14:58:23Z',
        pushed_at: '2021-06-06T14:58:09Z',
        git_url: 'git://github.com/oktay/dummy-store.git',
        ssh_url: 'git@github.com:oktay/dummy-store.git',
        clone_url: 'https://github.com/oktay/dummy-store.git',
        svn_url: 'https://github.com/oktay/dummy-store',
        homepage: 'dummy-store.vercel.app',
        size: 106,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'Vue',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 347502651,
        node_id: 'MDEwOlJlcG9zaXRvcnkzNDc1MDI2NTE=',
        name: 'cakrazemlak',
        full_name: 'oktay/cakrazemlak',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/cakrazemlak',
        description: 'Real estate website with Gatsby.',
        fork: false,
        url: 'https://api.github.com/repos/oktay/cakrazemlak',
        forks_url: 'https://api.github.com/repos/oktay/cakrazemlak/forks',
        keys_url:
          'https://api.github.com/repos/oktay/cakrazemlak/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/cakrazemlak/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/cakrazemlak/teams',
        hooks_url: 'https://api.github.com/repos/oktay/cakrazemlak/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/cakrazemlak/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/cakrazemlak/events',
        assignees_url:
          'https://api.github.com/repos/oktay/cakrazemlak/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/cakrazemlak/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/cakrazemlak/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/cakrazemlak/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/cakrazemlak/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/cakrazemlak/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/cakrazemlak/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/cakrazemlak/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/cakrazemlak/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/cakrazemlak/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/cakrazemlak/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/cakrazemlak/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/cakrazemlak/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/cakrazemlak/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/cakrazemlak/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/cakrazemlak/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/cakrazemlak/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/cakrazemlak/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/cakrazemlak/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/cakrazemlak/merges',
        archive_url:
          'https://api.github.com/repos/oktay/cakrazemlak/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/cakrazemlak/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/cakrazemlak/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/cakrazemlak/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/cakrazemlak/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/cakrazemlak/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/cakrazemlak/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/cakrazemlak/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/cakrazemlak/deployments',
        created_at: '2021-03-13T23:33:18Z',
        updated_at: '2021-11-16T16:00:42Z',
        pushed_at: '2022-03-27T13:49:46Z',
        git_url: 'git://github.com/oktay/cakrazemlak.git',
        ssh_url: 'git@github.com:oktay/cakrazemlak.git',
        clone_url: 'https://github.com/oktay/cakrazemlak.git',
        svn_url: 'https://github.com/oktay/cakrazemlak',
        homepage: 'https://cakrazemlak.vercel.app',
        size: 861,
        stargazers_count: 1,
        watchers_count: 1,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 1,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ['gatsby', 'react'],
        visibility: 'public',
        forks: 1,
        open_issues: 0,
        watchers: 1,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 344596371,
        node_id: 'MDEwOlJlcG9zaXRvcnkzNDQ1OTYzNzE=',
        name: 'oktaycolakoglu-2021',
        full_name: 'oktay/oktaycolakoglu-2021',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/oktaycolakoglu-2021',
        description: 'My personal homepage',
        fork: false,
        url: 'https://api.github.com/repos/oktay/oktaycolakoglu-2021',
        forks_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/forks',
        keys_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/teams',
        hooks_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/events',
        assignees_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/oktaycolakoglu-2021/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/merges',
        archive_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/oktaycolakoglu-2021/deployments',
        created_at: '2021-03-04T20:09:24Z',
        updated_at: '2021-11-03T20:49:18Z',
        pushed_at: '2022-06-02T09:05:43Z',
        git_url: 'git://github.com/oktay/oktaycolakoglu-2021.git',
        ssh_url: 'git@github.com:oktay/oktaycolakoglu-2021.git',
        clone_url: 'https://github.com/oktay/oktaycolakoglu-2021.git',
        svn_url: 'https://github.com/oktay/oktaycolakoglu-2021',
        homepage: 'https://oktaycolakoglu.com',
        size: 629,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ['chakra-ui', 'nextjs'],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 339830830,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMzk4MzA4MzA=',
        name: 'ko-todoapp',
        full_name: 'oktay/ko-todoapp',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/ko-todoapp',
        description: 'Simple todo app with Knockout JS',
        fork: false,
        url: 'https://api.github.com/repos/oktay/ko-todoapp',
        forks_url: 'https://api.github.com/repos/oktay/ko-todoapp/forks',
        keys_url: 'https://api.github.com/repos/oktay/ko-todoapp/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/ko-todoapp/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/ko-todoapp/teams',
        hooks_url: 'https://api.github.com/repos/oktay/ko-todoapp/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/ko-todoapp/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/ko-todoapp/events',
        assignees_url:
          'https://api.github.com/repos/oktay/ko-todoapp/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/ko-todoapp/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/ko-todoapp/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/ko-todoapp/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/ko-todoapp/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/ko-todoapp/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/ko-todoapp/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/ko-todoapp/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/ko-todoapp/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/ko-todoapp/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/ko-todoapp/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/ko-todoapp/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/ko-todoapp/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/ko-todoapp/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/ko-todoapp/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/ko-todoapp/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/ko-todoapp/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/ko-todoapp/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/ko-todoapp/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/ko-todoapp/merges',
        archive_url:
          'https://api.github.com/repos/oktay/ko-todoapp/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/ko-todoapp/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/ko-todoapp/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/ko-todoapp/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/ko-todoapp/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/ko-todoapp/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/ko-todoapp/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/ko-todoapp/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/ko-todoapp/deployments',
        created_at: '2021-02-17T19:18:08Z',
        updated_at: '2021-03-31T11:30:12Z',
        pushed_at: '2021-03-31T08:17:59Z',
        git_url: 'git://github.com/oktay/ko-todoapp.git',
        ssh_url: 'git@github.com:oktay/ko-todoapp.git',
        clone_url: 'https://github.com/oktay/ko-todoapp.git',
        svn_url: 'https://github.com/oktay/ko-todoapp',
        homepage: '',
        size: 18,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'CSS',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 335082543,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMzUwODI1NDM=',
        name: 'dotfiles',
        full_name: 'oktay/dotfiles',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/dotfiles',
        description: 'This is my basic shell and git configuration',
        fork: false,
        url: 'https://api.github.com/repos/oktay/dotfiles',
        forks_url: 'https://api.github.com/repos/oktay/dotfiles/forks',
        keys_url: 'https://api.github.com/repos/oktay/dotfiles/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/dotfiles/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/dotfiles/teams',
        hooks_url: 'https://api.github.com/repos/oktay/dotfiles/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/dotfiles/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/dotfiles/events',
        assignees_url:
          'https://api.github.com/repos/oktay/dotfiles/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/dotfiles/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/dotfiles/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/dotfiles/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/dotfiles/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/dotfiles/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/dotfiles/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/dotfiles/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/oktay/dotfiles/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/dotfiles/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/dotfiles/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/dotfiles/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/dotfiles/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/dotfiles/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/dotfiles/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/dotfiles/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/dotfiles/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/dotfiles/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/dotfiles/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/dotfiles/merges',
        archive_url:
          'https://api.github.com/repos/oktay/dotfiles/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/oktay/dotfiles/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/dotfiles/issues{/number}',
        pulls_url: 'https://api.github.com/repos/oktay/dotfiles/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/dotfiles/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/dotfiles/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/oktay/dotfiles/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/dotfiles/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/dotfiles/deployments',
        created_at: '2021-02-01T20:59:16Z',
        updated_at: '2022-06-08T10:29:40Z',
        pushed_at: '2022-06-08T10:29:36Z',
        git_url: 'git://github.com/oktay/dotfiles.git',
        ssh_url: 'git@github.com:oktay/dotfiles.git',
        clone_url: 'https://github.com/oktay/dotfiles.git',
        svn_url: 'https://github.com/oktay/dotfiles',
        homepage: '',
        size: 1045,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'Shell',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 287740842,
        node_id: 'MDEwOlJlcG9zaXRvcnkyODc3NDA4NDI=',
        name: 'cakrazemlak-cms',
        full_name: 'oktay/cakrazemlak-cms',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/cakrazemlak-cms',
        description: 'Strapi CMS for Real Estate Website',
        fork: false,
        url: 'https://api.github.com/repos/oktay/cakrazemlak-cms',
        forks_url: 'https://api.github.com/repos/oktay/cakrazemlak-cms/forks',
        keys_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/oktay/cakrazemlak-cms/teams',
        hooks_url: 'https://api.github.com/repos/oktay/cakrazemlak-cms/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/issues/events{/number}',
        events_url: 'https://api.github.com/repos/oktay/cakrazemlak-cms/events',
        assignees_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/cakrazemlak-cms/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/oktay/cakrazemlak-cms/merges',
        archive_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/cakrazemlak-cms/deployments',
        created_at: '2020-08-15T12:18:20Z',
        updated_at: '2021-11-16T20:11:59Z',
        pushed_at: '2021-03-15T18:23:06Z',
        git_url: 'git://github.com/oktay/cakrazemlak-cms.git',
        ssh_url: 'git@github.com:oktay/cakrazemlak-cms.git',
        clone_url: 'https://github.com/oktay/cakrazemlak-cms.git',
        svn_url: 'https://github.com/oktay/cakrazemlak-cms',
        homepage: '',
        size: 550,
        stargazers_count: 3,
        watchers_count: 3,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 2,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ['backend', 'cms', 'strapi'],
        visibility: 'public',
        forks: 2,
        open_issues: 0,
        watchers: 3,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      {
        id: 79169416,
        node_id: 'MDEwOlJlcG9zaXRvcnk3OTE2OTQxNg==',
        name: 'hackintosh-msi-ge60',
        full_name: 'oktay/hackintosh-msi-ge60',
        private: false,
        owner: {
          login: 'oktay',
          id: 3390175,
          node_id: 'MDQ6VXNlcjMzOTAxNzU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/3390175?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/oktay',
          html_url: 'https://github.com/oktay',
          followers_url: 'https://api.github.com/users/oktay/followers',
          following_url:
            'https://api.github.com/users/oktay/following{/other_user}',
          gists_url: 'https://api.github.com/users/oktay/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/oktay/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/oktay/subscriptions',
          organizations_url: 'https://api.github.com/users/oktay/orgs',
          repos_url: 'https://api.github.com/users/oktay/repos',
          events_url: 'https://api.github.com/users/oktay/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/oktay/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/oktay/hackintosh-msi-ge60',
        description:
          'This is a guide for install Mac OS X El Capitan on "MSI GE60 2PC" laptop.',
        fork: false,
        url: 'https://api.github.com/repos/oktay/hackintosh-msi-ge60',
        forks_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/forks',
        keys_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/teams',
        hooks_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/hooks',
        issue_events_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/events',
        assignees_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/branches{/branch}',
        tags_url: 'https://api.github.com/repos/oktay/hackintosh-msi-ge60/tags',
        blobs_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/languages',
        stargazers_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/stargazers',
        contributors_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/contributors',
        subscribers_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/subscribers',
        subscription_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/subscription',
        commits_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/merges',
        archive_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/downloads',
        issues_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/labels{/name}',
        releases_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/oktay/hackintosh-msi-ge60/deployments',
        created_at: '2017-01-16T23:37:15Z',
        updated_at: '2022-03-02T14:48:09Z',
        pushed_at: '2020-07-05T15:28:47Z',
        git_url: 'git://github.com/oktay/hackintosh-msi-ge60.git',
        ssh_url: 'git@github.com:oktay/hackintosh-msi-ge60.git',
        clone_url: 'https://github.com/oktay/hackintosh-msi-ge60.git',
        svn_url: 'https://github.com/oktay/hackintosh-msi-ge60',
        homepage: '',
        size: 5065,
        stargazers_count: 8,
        watchers_count: 8,
        language: 'C++',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 3,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ['hackintosh', 'macos'],
        visibility: 'public',
        forks: 3,
        open_issues: 0,
        watchers: 8,
        default_branch: 'master',
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
    ],
  });
}
