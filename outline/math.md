# 数学软件实习

[授课教师：徐夙](https://hughxusu.github.io/lesson-index/#/c-teacher)、张波

本站网址：https://hughxusu.github.io/lesson-index/#/outline/math

## 主要内容

授课内容：

1. 机器学习常用软件库
   1. [Numpy](https://hughxusu.github.io/lesson-py/#/docs/e-usage/2-numpy)
   2. [Matplotlib](https://hughxusu.github.io/lesson-py/#/docs/e-usage/3-matplotlib)
   3. [Pandas](https://hughxusu.github.io/lesson-py/#/docs/e-usage/4-pandas)

2. [人工智能概述](https://hughxusu.github.io/lesson-ai/#/docs/index)
3. [机器学习经典算法](https://hughxusu.github.io/lesson-ai/#/docs/a-base/01-knn)

## 成绩考核

### 考核内容

根据要求完成如下三个机器学习任务（每个任务从可选数据集中选择一个即可），并提交分析报告。

任务一（二分类）：

  1. [Credit Card Fraud Detection](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud)
  2. [Heart Disease UCI](https://www.kaggle.com/datasets/cherngs/heart-disease-cleveland-uci)
  3. [Sonar, Mines vs. Rocks](https://www.kaggle.com/datasets/taseermehboob9/submarine-sonar-rock-or-mine-dataset)
  4. [Indian Liver Patient Dataset](https://www.kaggle.com/datasets/jeevannagaraj/indian-liver-patient-dataset)
  5. [Abalone Dataset](https://www.kaggle.com/datasets/rodolfomendes/abalone-dataset)

任务二（多分类）：

1. [Wine dataset](https://www.kaggle.com/datasets/tawfikelmetwally/wine-dataset)
2. [Glass Identification Dataset](https://www.kaggle.com/datasets/uciml/glass)
3. [Dry Bean Dataset](https://www.kaggle.com/datasets/muratkokludataset/dry-bean-dataset)
4. [Faulty Steel Plates](https://www.kaggle.com/datasets/uciml/faulty-steel-plates)
5. [seeds dataset](https://www.kaggle.com/datasets/rwzhang/seeds-dataset)

任务三（回归分析）：

1. [California Housing Prices](https://www.kaggle.com/datasets/camnugent/california-housing-prices)
2. [Forest Fires Data Set](https://www.kaggle.com/datasets/elikplim/forest-fires-data-set)

#### 作业要求与步骤

1. 数据加载与分析
   * 使用 `pandas`, `matplotlib`, `numpy` 加载和探索数据。
   * 检查数据基本信息、缺失值、重复值。
   * 进行可视化分析：特征分布、箱线图、相关性热力图、类别分布（分类任务）等。
2. 数据预处理
   * 处理缺失值和异常值。
   * 根据需要处理分类编码数据类型。
   * 必须进行特标准化，不同算法比较进行特征标准化的效果。
   * 划分训练集、验证集和测试集。
3. 模型训练、调优与评估（核心部分）
   * 对于分类任务（二分类/多分类）：按上述要求实现5个模型。
     * K近邻（baseline）
     * 逻辑回归
     * 支持向量机
     * 决策树
     * 集成学习
   * 对于回归任务：按上述要求实现3个模型。
     * 线性回归（baseline）
     * K近邻回归
     * 支持向量机回归
   * 使用`scikit-learn`训练模型。
   * 必须使用网格搜索（`GridSearchCV`）和交叉验证进行超参数调优，参数调优在验证集上调整。
   * 用最优模型在测试集上进行预测。
   * 选择并计算合适的评估指标：
     * 分类任务：准确率、精确率、召回率、F1-score、（二分类需提供AUC-ROC曲线和混淆矩阵）。
     * 回归任务：均方误差（MSE）、均绝对误差（MAE）、R²分数。
   * 综合分析：制作一个汇总表格，对比所有模型在测试集上的性能。分析哪个模型表现最好，并尝试从算法原理和数据特点的角度解释原因。
4. 深入分析（可选加分项）
   * 主成分分析（PCA）：对高维数据进行降维可视化，观察数据在低维空间的分布。
   * 学习曲线：绘制某个模型的学习曲线，分析模型是否过拟合或欠拟合，以及增加数据量是否有帮助。
   * 特征重要性：对树模型（决策树、随机森林）分析特征重要性，并讨论其现实意义。
5. 报告格式要求：
   1. 中代码只需要关键部分，不要将完整代码帖如文档中。
   2. 绘图代码不需要放入文档中，报告中只需要结果图像和图像说明。
   3. 报告的总页数，**不要超过20页**。

### 提交要求

1. 按模板的要求完成作业。
2. 最终报告提交需要提交**纸质版和电子版**。
   * 纸制版报告需要**双面打印**，开学**第一周提交**到博远楼809。
   * 电子版在课程群里收集，电子版**文件命名格式**为`学号_班级_姓名`，例如：`2001092_信2202_张三`。

> [!attention]
>
> 每位同学提交文件电子版需要严格按照上述格式给文件命名。

### 评分标准

| 评分项                    | 分值 | 说明                                                         |
| :------------------------ | :--- | :----------------------------------------------------------- |
| 数据预处理                | 20   | 数据清洗、可视化、分析是否充分、正确                         |
| 模型实现与调优            | 35   | 是否正确实现要求的所有模型，是否使用交叉验证和网格搜索进行有效调优 |
| 模型评估与比较            | 30   | 评估指标选择是否合理，对比分析是否深入、有见解               |
| 报告结构与表达            | 15   | 报告结构清晰、结论明确                                       |
| 加分项（PCA, 学习曲线等） | +10  | 完成可选任务，并有自己的分析                                 |

## 资源下载

[模板文件下载](https://resource-443.webvpn.ncut.edu.cn/asset/#/share?shareId=fa85a9a9390906d914597b96680e6aab)

> [!warning]
>
> [使用校园网打开或使用webvpn登录](https://webvpn.ncut.edu.cn/iam/login)



