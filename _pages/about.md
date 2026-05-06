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
<span class="badge" style="background-color: {{ include.color | default: '#007BFF' }}; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; display: inline-block; margin: 0 2px;">{{ include.text }}</span>
<span class='anchor' id='about-me'></span>

Welcome to Bin Zhang’s Personal Homepage!

I am an **Assistant Professor/Postdoctoral Fellow** at the [Institute of Automation, Chinese Academy of Sciences (CASIA, 中国科学院自动化研究所)](http://www.ia.cas.cn/), working in the Key Laboratory of Cognition and Decision Intelligence for Complex Systems. Advised by [Prof. Guoliang Fan (范国梁)](https://people.ucas.ac.cn/~fanguoliang), my research spans ​​Reinforcement Learning (RL)​​, ​​Multi-agent Systems​​, and ​​Large Language Model (LLM) Agents​​, with a focus on:

- Developing ​​adaptive AI algorithms​​ for multi-agent cooperation/competition in complex environments.
- Advancing ​​LLM agents' collaborative reasoning​​ and ​​tool-learning capabilities​​ for autonomous systems.
  
I also work closely with [Prof. Zhiwei Xu (徐志伟)](https://xuleek.tech/) (Assistant Professor, Shandong University). And I have published 30+ papers at the international AI conferences.<a href='https://scholar.google.com/citations?user=6Cqm0pYAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>

If you are interested with my experience or research. Plese feel free to contact with me via [<b>Email</b>](mailto:zhangbin2020@ia.ac.cn) or [<b>Wechat</b>](../images/WeChat.jpg).


# 🔥 News
- *2026.05*: &nbsp;🎉🎉 One paper has been accepted by **RLC 2026**!
- *2026.04*: &nbsp;🎉🎉 One paper has been accepted by **IJCAI 2026**!
- *2026.02*: &nbsp;🎉🎉 One paper has been accepted by **ICAPS 2026**!
- *2026.01*: &nbsp;🎉🎉 Two papers have been accepted by **ICLR 2026**!
- *2025.12*: &nbsp;🎉🎉 One paper has been accepted by **AAMAS 2026**!
- *2025.11*: &nbsp;🎉🎉 One paper has been accepted by **AAAI 2026**!
- *2025.05*: &nbsp;🎉🎉 One paper has been accepted by **ICML 2025**!
- *2025.04*: &nbsp;🎉🎉 One paper has been accepted by **IJCNN 2025**!
- *2025.02*: &nbsp;🎉🎉 One paper has been accepted by **TMLR** & **ICLR 2025 Workshop on DATA-FM**!
- *2025.01*: &nbsp;🎉🎉 One paper with co-first authorship has been accepted by **DASFAA 2025**!
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

# 📖 Experience
- *2025.07 - Present* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="./images/casicon.ico" alt="CAS" style="width:20px;height:20px;"> Assistant Professor in [Institute of Automation, Chinese Academy of Sciences](http://www.ia.cas.cn/)
- *2020.09 - 2025.06* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="./images/casicon.ico" alt="CAS" style="width:20px;height:20px;"> Ph.D. in [Institute of Automation, Chinese Academy of Sciences](http://www.ia.cas.cn/)
- *2016.09 - 2020.06* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="./images/sduicon.ico" alt="SDU" style="width:20px;height:20px;"> B.E. in [School of Control Science and Engineering, Shandong University](https://control.sdu.edu.cn/)

# 💬 Research Interest
- Reinforcement Learning
- Multi-agent Coordination
- LLM agents (Tool Learning, Text-to-SQL,  Text-based Game)

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NIPS 2023 Workshop</div><img src='images/TPTU.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Tptu: Task planning and tool usage of large language model-based ai agents](https://arxiv.org/abs/2308.03427)

Jingqing Ruan, Yihong Chen, <strong><u>Bin Zhang</u></strong>, Zhiwei Xu, Tianpeng Bao, Guoqing Du, Shiwei Shi, Hangyu Mao, Ziyue Li, Xingyu Zeng, Rui Zhao

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=6Cqm0pYAAAAJ&citation_for_view=6Cqm0pYAAAAJ:qxL8FJ1GzNcC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We propose a structured framework tailored for LLM-based AI Agents and discuss the crucial capabilities necessary for tackling intricate problems. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv:2403.02951</div><img src='images/benchmark.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Benchmarking the text-to-sql capability of large language models: A comprehensive evaluation](https://arxiv.org/abs/2403.02951)

<strong><u>Bin Zhang</u></strong>, Yuxiao Ye, Guoqing Du, Xiaoru Hu, Zhishuai Li, Sun Yang, Chi Harold Liu, Rui Zhao, Ziyue Li, Hangyu Mao

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=6Cqm0pYAAAAJ&sortby=pubdate&citation_for_view=6Cqm0pYAAAAJ:aqlVkmm33-oC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We evaluate LLMs through five Text-to-SQL related tasks, reveal performance differences and suggest task-specific optimization strategies. 
</div>
</div>

- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">RLC 2026</span> Beyond Local Views: Global State Inference with Diffusion Models for Cooperative MARL. Zhiwei Xu, Hangyu Mao, Nianmin Zhang, Shengtao Zhang, Xin Xin, Pengjie Ren, Dapeng Li, <strong><u>Bin Zhang</u></strong>, Guoliang Fan, Zhumin Chen, Changwei Wang, Jiangjin Yin
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">IJCAI 2026</span> From Traits to Roles: Consensus-Guided Composition of Orthogonal Experts for Cooperative MARL. Yewei Zhou, <strong><u>Bin Zhang</u></strong>, Ying Zhou, Xuri Ge, Dapeng Li, Hangyu Mao, Pengjie Ren, Zhiwei Xu
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICAPS 2026</span> QSIM: Mitigating Overestimation in Multi-Agent Reinforcement Learning via Action Similarity Weighted Q-Learning. Yuanjun Li, <strong><u>Bin Zhang</u></strong>, Hao Chen, Zhouyang Jiang, Dapeng Li, Zhiwei Xu
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICLR 2026</span> [Peak-Return Greedy Slicing: Subtrajectory Selection for Transformer-based Offline RL](https://openreview.net/forum?id=7vpehpWnnY). Zhiwei Xu, Miduo Cui, Dapeng Li, Zhihao Liu, Haifeng Zhang, Hangyu Mao, Guoliang Fan, <strong><u>Bin Zhang</u></strong>
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICLR 2026</span> [Towards Better Branching Policies: Leveraging the Sequential Nature of Branch-and-Bound Tree](https://openreview.net/forum?id=iQKzHeLDrN). Ce Zhang,  <strong><u>Bin Zhang</u></strong>, Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">AAMAS 2026</span>  Quality-Diversity for Multi-Agent Reinforcement Learning. Hao Chen, Pengyi Li, <strong><u>Bin Zhang</u></strong>, Hu Fu, Zhiwei Xu, Ce Zhang, Xinyue Lu, Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">AAAI 2026</span>  [Graph of Verification: Structured Verification of LLM Reasoning with Directed Acyclic Graphs](https://arxiv.org/abs/2506.12509). Jiwei Fang, <strong><u>Bin Zhang</u></strong>, Changwei Wang, Jin Wan, Zhiwei Xu
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICML 2025</span>  [Reidentify:Context-AwareIdentityGenerationforContextual Multi-AgentReinforcementLearning](https://openreview.net/forum?id=vUDWRMB3tX&noteId=PzF98Qf08i). Zhiwei Xu, Kun Hu, Xin Xin, Weiliang Meng, Yiwei Shi, Hangyu Mao, <strong><u>Bin Zhang</u></strong>, Dapeng Li, Jiangjin Yin
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">IJCNN 2025</span> [Enhancing Branching Policy Generalization through Self-Supervised Adversarial Instance Augmentation](https://ieeexplore.ieee.org/document/11229180). Ce Zhang, <strong><u>Bin Zhang</u></strong>, Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">DASFAA 2025</span> [PET-SQL: A Prompt-enhanced Two-stage Text-to-SQL Framework with Cross-consistency](https://arxiv.org/abs/2403.09732). Zhishuai Li, Xiang Wang, Jingjing Zhao, Sun Yang, Guoqing Du, Xiaoru Hu, <strong><u>Bin Zhang</u></strong>, Yuxiao Ye, Ziyue Li, Rui Zhao, Hangyu Mao
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">AAMAS 2025</span> Unveiling Decision Intention for Cooperative Multi-Agent Reinforcement Learning. Zeren Zhang, Zhiwei Xu, Guangchong Zhou, Dapeng Li, <strong><u>Bin Zhang</u></strong>, Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">AAAI 2025</span> [Efficient Communication in Multi-Agent Reinforcement Learning with Implicit Consensus Generation](https://ojs.aaai.org/index.php/AAAI/article/view/34490). Dapeng Li, Na Lou, Zhiwei Xu, <strong><u>Bin Zhang</u></strong>, Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICML 2024</span> [Stackelberg Decision Transformer for Asynchronous Action Coordination in Multi-Agent Systems](https://arxiv.org/abs/2305.07856). <strong><u>Bin Zhang</u></strong>, Hangyu Mao, Lijuan Li, Zhiwei Xu, Dapeng Li, Rui Zhao, and Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">IJCAI 2024</span> [PTDE: Personalized Training with Distilled Execution for Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2210.08872). Yiqun Chen, Hangyu Mao, Jiaxin Mao, Shiguang Wu, Tianle Zhang, <strong><u>Bin Zhang</u></strong>, Wei Yang, Hongxing Chang
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICLR 2024 Workshop on LLM Agents</span> [Controlling Large Language Model-based Agents for Large-Scale Decision-Making: An Actor-Critic Approach](https://arxiv.org/abs/2311.13884). <strong><u>Bin Zhang</u></strong>, Hangyu Mao, Jingqing Ruan, et al.
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">EMNLP 2024 Industry Track</span> [Boosting Task Planning and Tool Usage of Large Language Model-based Agents in Real-world Systems](https://arxiv.org/abs/2311.11315). Yilun Kong, Jingqing Ruan, Yihong Chen, <strong><u>Bin Zhang</u></strong>, et al.
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">IJCNN 2024</span> [SGCD: Subgroup Contribution Decomposition for Multi-Agent Reinforcement Learning](https://ieeexplore.ieee.org/document/10650899). Hao Chen, <strong><u>Bin Zhang</u></strong>, Guoliang Fan.
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">AAMAS 2024</span> [PDiT: Interleaving Perception and Decision-making Transformers for Deep Reinforcement Learning](https://arxiv.org/abs/2312.15863v1). Hangyu Mao, Rui Zhao, Ziyue Li, Zhiwei Xu, Hao Chen, Yiqun Chen, Bin Zhang, et al.
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">AAMAS Extended Abstract 2024</span> [From Explicit Communication to Tacit Cooperation:A Novel Paradigm for Cooperative MARL](https://arxiv.org/abs/2304.14656). Dapeng Li, Zhiwei Xu, <strong><u>Bin Zhang</u></strong>, and Guoliang Fan.
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICASSP 2024</span> [Adaptive Parameter Sharing for Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2312.09009). Dapeng Li, Na Lou, <strong><u>Bin Zhang</u></strong>, Zhiwei Xu, Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICONIP 2024</span> [Decentralized Extension for Centralized Multi-Agent Reinforcement Learning via Online Distillation](https://link.springer.com/chapter/10.1007/978-981-96-6582-2_15). Zeren Zhang, <strong><u>Bin Zhang</u></strong>, Guangchong Zhou, Dapeng Li, Zhiwei Xu and Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICONIP 2024</span> [GATE: Guided Contrastive State Space for Multi-Agent Reinforcement Learning](https://link.springer.com/chapter/10.1007/978-981-96-6585-3_14). Hao Chen, <strong><u>Bin Zhang</u></strong> and Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">NeurIPS 2023</span> [Dual Self-Awareness Value Decomposition Framework without Individual Global Max for Cooperative MARL](https://arxiv.org/abs/2302.02180). Zhiwei Xu, <strong><u>Bin Zhang</u></strong>, Dapeng Li, Guangchong Zhou, Zeren Zhang, Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">IJCAI 2023</span> [Inducing Stackelberg Equilibrium through Spatio-Temporal Sequential Decision-Making in Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2304.10351). <strong><u>Bin Zhang</u></strong>, Lijuan Li, Zhiwei Xu, Dapeng Li, Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">IJCNN 2023</span> [SEA: A Spatially Explicit Architecture for Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2304.12532). Dapeng Li, Zhiwei Xu, <strong><u>Bin Zhang</u></strong>, Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">AAAI 2023</span> [Consensus Learning for Cooperative Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2206.02583). Zhiwei Xu, <strong><u>Bin Zhang</u></strong>, Dapeng Li, Zeren Zhang, Guangchong Zhou, Hao Chen, Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">AAAI 2023</span> [HAVEN: Hierarchical Cooperative Multi-Agent Reinforcement Learning with Dual Coordination Mechanism](https://arxiv.org/abs/2110.07246). Zhiwei Xu, Yunpeng Bai, <strong><u>Bin Zhang</u></strong>, Dapeng Li, and Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">NeurIPS 2022</span> [Mingling Foresight with Imagination: Model-Based Cooperative Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2204.09418). Zhiwei Xu, Dapeng Li, <strong><u>Bin Zhang</u></strong>, Yuan Zhan, Yunpeng Bai, and Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICONIP 2022</span> [Multi-Agent Hyper-Attention Policy Optimization](https://link.springer.com/chapter/10.1007/978-3-031-30105-6_7). <strong><u>Bin Zhang</u></strong>, Zhiwei Xu, Yiqun Chen, Dapeng Li, Yunpeng Bai, Guoliang Fan, and Lijuan Li
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICONIP 2022</span> [Efficient Policy Generation in Multi-Agent Systems via Hypergraph Neural Network](https://arxiv.org/abs/2203.03265). <strong><u>Bin Zhang</u></strong>, Yunpeng Bai, Zhiwei Xu, Dapeng Li, and Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">IJCNN 2022</span> [Cooperative Multi-agent Reinforcement Learning with Hypergraph Convolution](https://arxiv.org/abs/2112.06771). Yunpeng Bai, Chen Gong, <strong><u>Bin Zhang</u></strong>, Guoliang Fan, Xinwen Hou, Yu Liu
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">AAMAS 2022</span> [SIDE: State Inference for Partially Observable Cooperative Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2105.06228). Zhiwei Xu, Yunpeng Bai, Dapeng Li, <strong><u>Bin Zhang</u></strong>, and Guoliang Fan
- <span style="background-color: #00369F; color: white; padding: 2px 6px; border-radius: 4px;">ICONIP 2022</span> [Learning to Coordinate via Multiple Graph Neural Networks](https://arxiv.org/abs/2104.03503). Zhiwei Xu, <strong><u>Bin Zhang</u></strong>, Yunpeng Bai, Dapeng Li, and Guoliang Fan

# 🧑‍🎨 Preprint
- `arXiv:2504.12961` [QLLM: Do We Really Need a Mixing Network for Credit Assignment in Multi-Agent Reinforcement Learning?](https://arxiv.org/abs/2504.12961?). Zhouyang Jiang, <strong><u>Bin Zhang</u></strong>, Yuanjun Li, Zhiwei Xu
- `OpenReview` [Towards Better Branching Policies: Leveraging the Sequential Nature of Branch-and-Bound Tree](https://openreview.net/forum?id=fwJ1rRHT91). Ce Zhang, <strong><u>Bin Zhang</u></strong>, Guoliang Fan
- `arXiv:2403.02951` [Benchmarking the text-to-sql capability of large language models: A comprehensive evaluation](https://arxiv.org/abs/2403.02951). <strong><u>Bin Zhang</u></strong>, Yuxiao Ye, Guoqing Du, Xiaoru Hu, Zhishuai Li, Sun Yang, Chi Harold Liu, Rui Zhao, Ziyue Li, Hangyu Mao
-  [Constructing Informative Subtask Representations for Multi-Agent Coordination](https://openreview.net/forum?id=GztevK7jDh). Guangchong Zhou, Zhiwei Xu, <strong><u>Bin Zhang</u></strong>, Dapeng Li, Zeren Zhang, Guoliang Fan
-  `arXiv:2408.09501` [Beyond Local Views: Global State Inference with Diffusion Models for Cooperative Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2408.09501). Zhiwei Xu, Hangyu Mao, Nianmin Zhang, Xin Xin, Pengjie Ren, Dapeng Li, <strong><u>Bin Zhang</u></strong>, Guoliang Fan, Zhumin Chen, Changwei Wang, Jiangjin Yin
-  `arXiv:2404.17780` [Verco: Learning Coordinated Verbal Communication for Multi-agent Reinforcement Learning](https://arxiv.org/abs/2404.17780). Dapeng Li, Hang Dong, Lu Wang, Bo Qiao, Si Qin, Qingwei Lin, Dongmei Zhang, Qi Zhang, Zhiwei Xu, <strong><u>Bin Zhang</u></strong>, Guoliang Fan
  

 
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
- International Conference on Learning Representations (ICLR 2024, 2025, 2026)
- International Conference on Machine Learning (ICML 2024, 2025)
- Annual Conference on Neural Information Processing Systems (NeurIPS 2025)
- AAAI Conference on Artificial Intelligence (AAAI 2025, 2026)
- International Joint Conference on Artificial Intelligence (IJCAI 2024, 2025)
- International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2025)
- International World Wide Web Conference (WWW 2025)

# 💻 Internships
- *2023.07 - 2024.04*, [SenseTime Research](https://www.sensetime.com/), China.
