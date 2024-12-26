---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Welcome to Bin Zhang’s Personal Homepage!

I am a fifth-year Ph.D. student at the [Institute of Automation, Chinese Academy of Sciences](http://www.ia.cas.cn/). My research interests include Reinforcement Learning, Multi-agent System, and Large Language Model (LLM) Agents. I am very fortunate to be advised by [Prof. Guoliang Fan (范国梁)](https://people.ucas.ac.cn/~fanguoliang) of the Key Laboratory of Cognition and Decision Intelligence for Complex Systems.

As a Ph.D. candidate in Artificial Intelligence, my research centers on developing advanced AI algorithms, particularly in multi-agent reinforcement learning, to enable autonomous agents to cooperate, compete, and adapt in complex environments. Additionally, I explore the collaborative skills and tool-learning capabilities of Large Language Model (LLM) agents, aiming to enhance the effectiveness of autonomous systems in dynamic, multi-agent settings.
I have published 20+ papers <a href='https://scholar.google.com/citations?user=6Cqm0pYAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> at the international AI conferences.

If you are interested with my experience or research. Plese feel free to contact with me via [<b>Email</b>](mailto:zhangbin2020@ia.ac.cn) or [<b>Wechat</b>](../images/WeChat.jpg).


# 🔥 News
- *2024.12*: &nbsp;🎉🎉 One paper has been accepted by **AAMAS 2025**!
- *2024.12*: &nbsp;🎉🎉 One paper has been accepted by **AAAI 2025**!
- *2024.10*: &nbsp;🎉🎉 One paper with co-first authorship has been accepted by **EMNLP 2024 Industry Track**!
- *2024.08*: &nbsp;🎉🎉 Two papers have been accepted by **ICONIP 2024**!
- *2024.05*: &nbsp;🎉🎉 One **first-author** paper has been accepted by **ICML 2024**!
- *2024.04*: &nbsp;🎉🎉 One paper has been accepted by **IJCAI 2024**!
- *2024.03*: &nbsp;🎉🎉 One paper has been accepted by **IJCNN 2024**!
- *2024.02*: &nbsp;🎉🎉 One **first-author** paper has been accepted by **ICLR 2024 Workshop on LLM Agents**!
- *2024.02*: &nbsp;🎉🎉 One paper with co-first authorship has been accepted by **ICLR 2024 Workshop on LLM Agents**!
- *2023.12*: &nbsp;🎉🎉 Two papers have been accepted by **AAMAS 2024**!
- *2023.12*: &nbsp;🎉🎉 One paper has been accepted accepted by **ICASSP 2024**!
- *2023.09*: &nbsp;🎉🎉 One paper has been accepted by **NeurIPS 2023**!
- *2023.04*: &nbsp;🎉🎉 One **first-author** paper has been accepted by **IJCAI 2023**!

# 📖 Educations
- *2020.09 - 2025.06 (expected)*, Ph.D in Institute of Automation, Chinese Academy of Sciences
- *2016.09 - 2020.06*, B.S. in School of Control Science and Engineering, Shandong University

# 💬 Research Interest
- Reinforcement Learning
- Multi-agent Coordination
- LLM agents (Tool Learning, Text-to-SQL,  Text-based Game)

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NIPS 2023 Workshop</div><img src='images/TPTU.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Tptu: Task planning and tool usage of large language model-based ai agents](https://arxiv.org/abs/2308.03427)

Jingqing Ruan, Yihong Chen, **Bin Zhang**, Zhiwei Xu, Tianpeng Bao, Guoqing Du, Shiwei Shi, Hangyu Mao, Ziyue Li, Xingyu Zeng, Rui Zhao

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=6Cqm0pYAAAAJ&citation_for_view=6Cqm0pYAAAAJ:qxL8FJ1GzNcC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We propose a structured framework tailored for LLM-based AI Agents and discuss the crucial capabilities necessary for tackling intricate problems. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv:2403.02951</div><img src='images/benchmark.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Benchmarking the text-to-sql capability of large language models: A comprehensive evaluation](https://arxiv.org/abs/2403.02951)

**Bin Zhang**, Yuxiao Ye, Guoqing Du, Xiaoru Hu, Zhishuai Li, Sun Yang, Chi Harold Liu, Rui Zhao, Ziyue Li, Hangyu Mao

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=6Cqm0pYAAAAJ&sortby=pubdate&citation_for_view=6Cqm0pYAAAAJ:aqlVkmm33-oC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We evaluate LLMs through five Text-to-SQL related tasks, reveal performance differences and suggest task-specific optimization strategies. 
</div>
</div>

- `AAMAS 2025` Unveiling Decision Intention for Cooperative Multi-Agent Reinforcement Learning, Zeren Zhang, Zhiwei Xu, Guangchong Zhou, Dapeng Li, **Bin Zhang**, Guoliang Fan
- `AAAI 2025` Efficient Communication in Multi-Agent Reinforcement Learning with Implicit Consensus Generation, Dapeng Li, Na Lou, Zhiwei Xu, **Bin Zhang**, Guoliang Fan
- `ICML 2024` [Stackelberg Decision Transformer for Asynchronous Action Coordination in Multi-Agent Systems](https://arxiv.org/abs/2305.07856), **Bin Zhang**, Hangyu Mao, Lijuan Li, Zhiwei Xu, Dapeng Li, Rui Zhao, and Guoliang Fan
- `IJCAI 2024` [PTDE: Personalized Training with Distilled Execution for Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2210.08872), Yiqun Chen, Hangyu Mao, Jiaxin Mao, Shiguang Wu, Tianle Zhang, **Bin Zhang**, Wei Yang, Hongxing Chang
- `ICLR 2024 Workshop on LLM Agents` [Controlling Large Language Model-based Agents for Large-Scale Decision-Making: An Actor-Critic Approach](https://arxiv.org/abs/2311.13884), **Bin Zhang**, Hangyu Mao, Jingqing Ruan, et al.
- `EMNLP 2024 Industry Track` [Boosting Task Planning and Tool Usage of Large Language Model-based Agents in Real-world Systems](https://arxiv.org/abs/2311.11315), Yilun Kong, Jingqing Ruan, Yihong Chen, **Bin Zhang**, et al.
- `IJCNN 2024` SGCD: Subgroup Contribution Decomposition for Multi-Agent Reinforcement Learning, Hao Chen, **Bin Zhang**, Guoliang Fan.
- `AAMAS 2024` [PDiT: Interleaving Perception and Decision-making Transformers for Deep Reinforcement Learning](https://arxiv.org/abs/2312.15863v1), Hangyu Mao, Rui Zhao, Ziyue Li, Zhiwei Xu, Hao Chen, Yiqun Chen, Bin Zhang, et al.
- `AAMAS Extended Abstract 2024` [From Explicit Communication to Tacit Cooperation:A Novel Paradigm for Cooperative MARL](https://arxiv.org/abs/2304.14656), Dapeng Li, Zhiwei Xu, **Bin Zhang**, and Guoliang Fan.
- `ICASSP 2024` [Adaptive Parameter Sharing for Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2312.09009), Dapeng Li, Na Lou, **Bin Zhang**, Zhiwei Xu, Guoliang Fan
- `ICONIP 2024` Decentralized Extension for Centralized Multi-Agent Reinforcement Learning via Online Distillation, Zeren Zhang, **Bin Zhang**, Guangchong Zhou, Dapeng Li, Zhiwei Xu and Guoliang Fan
- `ICONIP 2024` GATE: Guided Contrastive State Space for Multi-Agent Reinforcement Learning, Hao Chen, **Bin Zhang** and Guoliang Fan
- `NeurIPS 2023` [Dual Self-Awareness Value Decomposition Framework without Individual Global Max for Cooperative MARL](https://arxiv.org/abs/2302.02180), Zhiwei Xu, **Bin Zhang**, Dapeng Li, Guangchong Zhou, Zeren Zhang, Guoliang Fan
- `IJCAI 2023` [Inducing Stackelberg Equilibrium through Spatio-Temporal Sequential Decision-Making in Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2304.10351), **Bin Zhang**, Lijuan Li, Zhiwei Xu, Dapeng Li, Guoliang Fan
- `IJCNN 2023` [SEA: A Spatially Explicit Architecture for Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2304.12532), Dapeng Li, Zhiwei Xu, **Bin Zhang**, Guoliang Fan
- `AAAI 2023` [Consensus Learning for Cooperative Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2206.02583), Zhiwei Xu, **Bin Zhang**, Dapeng Li, Zeren Zhang, Guangchong Zhou, Hao Chen, Guoliang Fan
- `AAAI 2023` [HAVEN: Hierarchical Cooperative Multi-Agent Reinforcement Learning with Dual Coordination Mechanism](https://arxiv.org/abs/2110.07246), Zhiwei Xu, Yunpeng Bai, **Bin Zhang**, Dapeng Li, and Guoliang Fan
- `NeurIPS 2022` [Mingling Foresight with Imagination: Model-Based Cooperative Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2204.09418), Zhiwei Xu, Dapeng Li, **Bin Zhang**, Yuan Zhan, Yunpeng Bai, and Guoliang Fan
- `ICONIP 2022` [Multi-Agent Hyper-Attention Policy Optimization](https://link.springer.com/chapter/10.1007/978-3-031-30105-6_7), **Bin Zhang**, Zhiwei Xu, Yiqun Chen, Dapeng Li, Yunpeng Bai, Guoliang Fan, and Lijuan Li
- `ICONIP 2022` [Efficient Policy Generation in Multi-Agent Systems via Hypergraph Neural Network](https://arxiv.org/abs/2203.03265), **Bin Zhang**, Yunpeng Bai, Zhiwei Xu, Dapeng Li, and Guoliang Fan
- `IJCNN 2022` [Cooperative Multi-agent Reinforcement Learning with Hypergraph Convolution](https://arxiv.org/abs/2112.06771), Yunpeng Bai, Chen Gong, **Bin Zhang**, Guoliang Fan, Xinwen Hou, Yu Liu
- `AAMAS 2022` [SIDE: State Inference for Partially Observable Cooperative Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2105.06228), Zhiwei Xu, Yunpeng Bai, Dapeng Li, **Bin Zhang**, and Guoliang Fan
- `ICONIP 2022` [Learning to Coordinate via Multiple Graph Neural Networks](https://arxiv.org/abs/2104.03503), Zhiwei Xu, **Bin Zhang**, Yunpeng Bai, Dapeng Li, and Guoliang Fan

# 🧑‍🎨 Preprint
- `arXiv:2403.02951` [Benchmarking the text-to-sql capability of large language models: A comprehensive evaluation](https://arxiv.org/abs/2403.02951), **Bin Zhang**, Yuxiao Ye, Guoqing Du, Xiaoru Hu, Zhishuai Li, Sun Yang, Chi Harold Liu, Rui Zhao, Ziyue Li, Hangyu Mao
- `arXiv:2403.09732` [PET-SQL: A Prompt-enhanced Two-stage Text-to-SQL Framework with Cross-consistency](https://arxiv.org/abs/2403.09732), Zhishuai Li, Xiang Wang, Jingjing Zhao, Sun Yang, Guoqing Du, Xiaoru Hu, **Bin Zhang**, Yuxiao Ye, Ziyue Li, Rui Zhao, Hangyu Mao
-  [Constructing Informative Subtask Representations for Multi-Agent Coordination](https://openreview.net/forum?id=GztevK7jDh), Guangchong Zhou, Zhiwei Xu, **Bin Zhang**, Dapeng Li, Zeren Zhang, Guoliang Fan
-  [QPO: Query-dependent Prompt Optimization via Multi-Loop Offline Reinforcement Learning](https://arxiv.org/abs/2408.10504), Yilun Kong, Hangyu Mao, Qi Zhao, **Bin Zhang**, Jingqing Ruan, Li Shen, Yongzhe Chang, Xueqian Wang, Rui Zhao, Dacheng Tao
-  [Beyond Local Views: Global State Inference with Diffusion Models for Cooperative Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2408.09501), Zhiwei Xu, Hangyu Mao, Nianmin Zhang, Xin Xin, Pengjie Ren, Dapeng Li, **Bin Zhang**, Guoliang Fan, Zhumin Chen, Changwei Wang, Jiangjin Yin
  

 
# 🥇 Honors and Awards
- *2023*, Future Star Award, SenseTime Research (Intern Top 1)
- *2023*, Merit Student, University of Chinese Academy of Sciences
- *2022*, Climbing Scholarship, University of Chinese Academy of Sciences
- *2020*, Outstanding Graduates, Shandong Province
- *2020*, Weichai Power Scholarship, Shandong University
- *2017-2019*, National Scholarship, Ministry of Education (2 times)
- *2017-2020*, First-class Scholarship, Shandong University (3 times)

# 🌠 Academic Services
**Program Committee Member or Reviewer:**
- IEEE Transactions on Neural Networks and Learning Systems (TNNLS)
- Applied Soft Computing Journal
- International Conference on Learning Representations (ICLR 2024)
- International Conference on Machine Learning (ICML 2024)
- AAAI Conference on Artificial Intelligence (AAAI 2025)
- International Joint Conference on Artificial Intelligence (IJCAI 2024)
- International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2025)
- International World Wide Web Conference (WWW 2025)

# 💻 Internships
- *2023.07 - 2024.04*, [SenseTime Research](https://www.sensetime.com/), China.
