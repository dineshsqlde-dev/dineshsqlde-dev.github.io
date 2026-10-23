// Central config: edit links here. Empty strings render as "not set" instead of fake links.
export const LINKS = { email:'dineshsqlde@gmail.com', linkedin:'www.linkedin.com/in/dinesh22092001', github:'https://github.com/dineshsqlde-dev' }
export const LOCATION='Hyderabad, India'
export const NAV=['About','Services','Work','Experience','Skills','Contact']
export const SERVICES=[
 {icon:'Workflow',t:'Data Engineering',d:'Reliable ETL/ELT pipelines and orchestration that run unattended and fail loudly.'},
 {icon:'Layers',t:'Lakehouse Architecture',d:'Bronze, Silver and Gold layers that separate raw capture, cleansing and business-ready data.'},
 {icon:'Network',t:'Data Modelling',d:'Dimensional models: star schemas, facts and dimensions built for reporting.'},
 {icon:'DatabaseZap',t:'Database Migration',d:'Migration workflows across SQL Server, MySQL, PostgreSQL and Databricks.'},
 {icon:'ShieldCheck',t:'Data Quality & Reconciliation',d:'Validation, integrity checks and monitoring so numbers can be trusted.'},
 {icon:'BarChart3',t:'Analytics Enablement',d:'Clean, trusted data delivered to Power BI and reporting.'}]
export const PROJECTS=[
 {id:'fer',name:'FER',full:'Finance Enterprise Reporting',cat:'Reporting',tech:['Microsoft Fabric','Azure Data Factory','PySpark','Fabric Lakehouse','Power BI'],flow:['Source','Bronze','Silver','Gold','Power BI'],d:'A reporting modernization project using medallion architecture, Spark notebooks and dimensional models to prepare trusted data for enterprise reporting.'},
 {id:'snap',name:'Snap2Spark',full:'Database migration platform',cat:'Migration',tech:['Python','SQL Server','MySQL','PostgreSQL','Azure Databricks','PySpark'],flow:['Metadata','Schema','Orchestrate','Convert SPs','Validate'],d:'A migration platform covering metadata extraction, schema migration, orchestration, AI-assisted stored procedure conversion and validation.'},
 {id:'tlo',name:'TLO',full:'Tax Litigation Organizer',cat:'Migration',tech:['SQL Server','PostgreSQL','Azure Data Factory','Metadata-driven pipelines'],flow:['SQL Server','Pipelines','Reconcile','PostgreSQL'],d:'A database migration workflow focused on data integrity, reconciliation, pipeline monitoring and error handling.'},
 {id:'sat',name:'SAT',full:'Smart Analytics Tool',cat:'Analytics',tech:['AWS S3','Amazon RDS for SQL Server','SQL','Stored procedures','Indexing','Query tuning'],flow:['S3','Ingest','Validate','RDS model','Tuned queries'],d:'A data ingestion and analytics solution designed around structured data modelling, validation and query performance.'}]
export const JOBS=[
 {role:'Software Engineer',co:'Sparity Soft Technologies Pvt. Ltd.',when:'December 2023 – Present'},
 {role:'Trainee Software Engineer',co:'Technology Enthusiasts Pvt. Ltd.',when:'December 2022 – November 2023'}]
export const SKILLS:Record<string,string[]>={
 'Data platforms':['Microsoft Fabric','Fabric Lakehouse','Azure Data Factory','Azure Databricks','AWS S3','Amazon RDS'],
 'Languages and processing':['SQL / T-SQL','Python','PySpark'],
 'Databases':['SQL Server','PostgreSQL','MySQL'],
 'Architecture and analytics':['ETL/ELT','Medallion architecture','Star schema','Fact and dimension tables','Validation and reconciliation','Query optimization','Power BI'],
 'Engineering practices':['Git','CI/CD fundamentals','Logging and monitoring']}
export const CERTS=['Microsoft Certified: Fabric Data Engineer Associate (DP-700)','Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)','Microsoft Certified: Azure Data Fundamentals (DP-900)','Employee of the Quarter, 2025']
