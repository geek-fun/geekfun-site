---
title: DocKit Monitor and Manage Elasticsearch Cluster
description: Use DocKit to monitor and manage Elasticsearch including indices and alias management,
  nodes management, shards management, and templates management. This document outlines how to monitor and manage Elasticsearch in DocKit.
head:
  - - meta
    - name: keywords
      content: DocKit, Elasticsearch GUI client, connect Elasticsearch server, Elasticsearch connection guide, Elasticsearch management tool, Elasticsearch desktop client, Elasticsearch data management, Elasticsearch data analysis, Elasticsearch data visualization, Elasticsearch query tool, Elasticsearch cross-platform client, Elasticsearch open-source client, Elasticsearch Mac client, Elasticsearch Windows client, Elasticsearch Linux client, Elasticsearch AI-powered search, Elasticsearch multiple server support
  - - meta
    - name: robots
      content: noindex, follow
---

# DocKit Monitor and Manage Elasticsearch Cluster

DocKit as a NoSQL GUI client, it supports to monitor and manage Elasticsearch including indices and alias management,
nodes management, shards management, and templates management. This document outlines how to monitor and manage
Elasticsearch in DocKit.

## Install and Open DocKit

You can find detailed instructions on how to install and open DocKit in
the [installation guide](/docs/dockit/installation).

## Connect to Elasticsearch Server

You can find detailed instructions on how to connect to Elasticsearch
Server [connection guide](/docs/dockit/connect-to-server).

## Monitor & Manage Elasticsearch Cluster

### Cluster Management & Monitor

Click the `Manage` panel to monitor and manage the Elasticsearch cluster, you can view the cluster health, indices,
nodes, and shards information as below:
![DocKit manage panel](/manage-cluster.png)
In Cluster page, you can view the cluster health, nodes number, indices number, shards number, and other cluster
overview information.

### Nodes Management & Monitor

Click the `Nodes` tab to view the nodes list, you can see the list of nodes, click a node, you can view the node name,
IP, disk information, memory usage and other useful node information.
![DocKit Nodes manage UI](/manage-nodes.png)

### Shards Management & Monitor

Click the `Shards` tab to view the shards list, you can view the shard name, index name, state, and other shards related
information. click the shard item, DocKit will show the selected shard detail information like docs count, size, memory
and etc.

![DocKit Shards manage UI](/manage-shards.png)

### Indices Management & Monitor

Click the `Indices` tab to view the indices list, you can view the index name, document count, state, health and other
index
information, you can also:

- Create the index by clicking the `New Index` button on the right top,
- Delete the index by clicking the `...` in the `Actions` column and select the `Delete` option,
- Close/open the index by clicking the `...` in the `Actions` column and select the `Close`/`Open` option,
- Refresh the index by clicking the `Refresh` button on the right top.
- Remove the alias by clicking the icon in the `Aliases` column and select the `Remove Alias` option.
- Switch the alias by clicking the icon in the `Aliases` column and select the `Switch Alias` option.

![DocKit Indices manage UI](/manage-indices.png)

### Templates Management & Monitor

Click the `Templates` tab to view the templates list, you can view the template name, type, version and other template
related information. You can also click `Create Template` button on the right top to create a new template.

![DocKit Templates manage UI](/manage-template.png)
